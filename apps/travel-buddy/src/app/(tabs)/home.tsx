import { useCallback, useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { debounce } from 'lodash';
import tw from 'twrnc';
import ActivityFeed from '../../components/home/ActivityFeed';
import NearbyPlaces from '../../components/home/NearbyPlaces';
import Avatar from '../../components/common/Avatar';
import { recentActivity, savedPlaces } from '../../constants/dummyData';
import {
  useGetPlacesQuery,
  useInsertUserPlaceMutationMutation,
} from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';

interface SearchParams {
  country: string;
  name: string;
}

interface Place {
  place_id: string;
  name: string;
  country?: string;
  city?: string;
  category?: string[];
}

const AVATAR_URL =
  'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww';

const Home = () => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<SearchParams>({
    country: 'gr', // TODO maybe give it as a param to the user for more refined results
    name: '',
  });
  const [searchResults, setSearchResults] = useState<Place[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const { refetch } = useGetPlacesQuery({
    client: useGraphQlClient(),
    variables: {
      params: searchParams,
    },
    skip: true, // Query does not run automatically on component mount
  });

  const [mutateAsync] = useInsertUserPlaceMutationMutation({
    client: useGraphQlClient(),
  });

  const handleAvatarPress = () => {
    router.push('/profile');
  };

  const debouncedSearch = useCallback(
    debounce(async () => {
      if (!searchParams.name) {
        setSearchResults([]);
        setShowResults(false);
        return;
      }
      setIsSearching(true);
      try {
        if (!searchParams?.name) {
          return;
        }
        const response = await refetch();
        const placesData = response?.data?.search?.data?.results ?? [];

        setSearchResults(placesData);
        setShowResults(true);
      } catch (error) {
        console.error('Search failed:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 1000),
    [refetch, searchParams]
  );

  const handleSearchChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const name = e.nativeEvent.text;
      setSearchParams((prev) => ({
        ...prev,
        name: name || '',
      }));
      debouncedSearch();
    },
    [debouncedSearch]
  );

  const handleSelectPlace = async (place: Place) => {
    setShowResults(false);

    try {
      const response = await mutateAsync({
        variables: {
          area: place.city || place.country || '',
          country: place.country || '',
          categories: place.category || [],
          name: place.name,
          api_id: place.place_id,
          user_id: 1, // TODO get the user id from the auth context
        },
      });
      setSearchParams((prev) => ({
        ...prev,
        name: '',
      }));
    } catch (error) {
      console.log({ error });
    }
  };

  const renderSearchResult = (place: Place, index: number) => {
    return (
      <TouchableOpacity
        key={place.place_id || index}
        style={tw`px-4 py-3 border-b border-gray-200 dark:border-gray-700`}
        onPress={() => handleSelectPlace(place)}
      >
        <Text style={tw`text-gray-800 dark:text-gray-200 font-medium`}>
          {place.name}
        </Text>
        {place?.city && (
          <Text style={tw`text-gray-600 dark:text-gray-400 text-sm`}>
            {place?.city}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  const renderSearchResults = () => {
    if (!showResults || searchResults.length === 0) {
      return null;
    }

    return (
      <View
        style={tw`absolute top-20 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50 max-h-64`}
      >
        <ScrollView style={tw`py-2`}>
          {isSearching ? (
            <Text style={tw`p-4 text-gray-600 dark:text-gray-400`}>
              Searching...
            </Text>
          ) : (
            searchResults
              ?.filter((place) => place?.name)
              ?.map((place, index) => renderSearchResult(place, index))
          )}
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <View style={tw`flex-1 px-4`}>
        <View style={tw`flex-row items-center pt-10 pb-6 relative`}>
          <Avatar source={AVATAR_URL} onPress={handleAvatarPress} />
          <TextInput
            style={tw`flex-1 justify-center mx-4 px-4 py-2 android:py-1 bg-gray-200 dark:bg-gray-700 rounded-xl text-black dark:text-white text-base`}
            placeholder="Search"
            placeholderTextColor="#a1a1a1"
            cursorColor="#acacac"
            clearButtonMode="always"
            enterKeyHint="search"
            value={searchParams.name}
            onChange={handleSearchChange}
          />
        </View>

        {renderSearchResults()}

        <ScrollView
          showsVerticalScrollIndicator
          contentContainerStyle={tw`pb-20`}
        >
          <View style={tw`mb-8`}>
            <Text
              style={tw`text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4`}
            >
              Recent Activity
            </Text>
            <ActivityFeed activities={recentActivity} />
          </View>

          <View>
            <Text
              style={tw`text-xl font-semibold text-gray-800 dark:text-gray-400 mb-4`}
            >
              Nearby Places
            </Text>
            <NearbyPlaces places={savedPlaces} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

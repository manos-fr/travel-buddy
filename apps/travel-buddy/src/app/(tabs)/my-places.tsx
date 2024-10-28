import { Text, SafeAreaView, ScrollView, View, ActivityIndicator,Image } from 'react-native';
import tw from 'twrnc';
import { useGetListsQuery } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';

const MyPlaces = () => {
  // Use the useGetAllListsQuery hook to fetch lists
  const { data, loading, error } = useGetListsQuery({
    client: useGraphQlClient(),
  });

  if (loading) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white dark:bg-black items-center justify-center`}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView style={tw`flex-1 bg-white dark:bg-black items-center justify-center`}>
        <Text style={tw`text-red-500`}>Error: {error.message}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      
      <View style={tw`bg-black p-4`}>
        <Text style={tw`text-white font-semibold text-2xl`}>
          My Places
        </Text>
      </View>
      <ScrollView contentContainerStyle={[tw`flex-grow`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 px-4`}>

          {data && data.lists.length > 0 ? (
            data.lists.map((list) => (
              <View key={list.id} style={tw`mb-4 relative`}>
                {list.Photo ? (
                  <Image 
                    source={{ uri: list.Photo }} 
                    style={tw`h-85 rounded-m`} 
                    resizeMode="cover"
                  />
                ) : (
                  <View style={tw`h-85 bg-gray-300 rounded-m`} /> // Gray background when no image
                )}
                <View style={tw`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 rounded-m`}>
                  <Text style={tw`font-bold text-white`}>{list.Name}</Text>
                  <Text style={tw`text-gray-200`}>{list.Description}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={tw`text-gray-500`}>No lists found.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPlaces;

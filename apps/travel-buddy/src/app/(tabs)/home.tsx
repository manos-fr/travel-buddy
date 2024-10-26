import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActivityFeed from '../../components/home/ActivityFeed';
import NearbyPlaces from '../../components/home/NearbyPlaces';
import { recentActivity, savedPlaces } from '../../constants/dummyData';
import tw from 'twrnc';
import Avatar from '../../components/common/Avatar';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  const handleAvatarPress = () => {
    router.push('/profile');
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView
        showsVerticalScrollIndicator
        style={tw`flex-1 px-4`}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View style={tw`flex-row items-center pt-10 pb-6`}>
          <Avatar
            source="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
            onPress={handleAvatarPress}
          />
          <TextInput
            style={tw`flex-1 mx-4 px-4 py-2 bg-gray-300 dark:bg-gray-600 rounded-3xl`}
            placeholder="Search places..."
          />
        </View>

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
    </SafeAreaView>
  );
};

export default Home;

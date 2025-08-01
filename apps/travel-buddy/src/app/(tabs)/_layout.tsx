import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import tw from 'twrnc';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...tw.style(
            'bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800'
          ),
          position: 'absolute',
          height: Platform.select({
            ios: 80,
            android: 48,
            web: 90,
          }),
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={25}
              style={tw`text-black dark:text-white`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'map' : 'map-outline'}
              size={25}
              style={tw`text-black dark:text-white`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="my-places"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'bookmark' : 'bookmark-outline'}
              size={25}
              style={tw`text-black dark:text-white`}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'people' : 'people-outline'}
              size={25}
              style={tw`text-black dark:text-white`}
            />
          ),
        }}
      />
    </Tabs>
  );
}

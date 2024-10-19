import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const BottomNavbar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Home', icon: 'home' },
    { name: 'Map', icon: 'map' },
    { name: 'My Places', icon: 'bookmark' },
    { name: 'Friends', icon: 'people' },
  ];

  return (
    <View
      style={tw`flex-row bg-white dark:bg-black border-t border-gray-200 pb-2`}
    >
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.name}
          style={tw`flex-1 items-center py-4`}
          onPress={() => navigation.navigate(tab.name)}
        >
          <Ionicons
            name={tab.icon as any}
            size={25}
            color={route.name === tab.name ? '#fff' : '#fff'}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavbar;

import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const BackButton = () => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={tw`absolute top-12 left-4 z-10`}
    >
      <Ionicons
        name="chevron-back"
        size={40}
        style={tw`text-black dark:text-white`}
      />
    </TouchableOpacity>
  );
};

export default BackButton;

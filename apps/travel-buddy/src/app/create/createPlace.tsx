import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';

const CreatePlace = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<number>(0);

  // Function to handle place creation logic
  const handleCreatePlace = () => {
    if (!searchTerm) {
      Alert.alert('Search Term Required', 'Please enter a place name.');
      return;
    }
    // Handle place creation logic here
    Alert.alert('Place Created', `Place: ${searchTerm}, Rating: ${selectedRating} stars`);
    // Clear inputs
    setSearchTerm('');
    setSelectedRating(0);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black dark:text-white font-bold text-2xl mb-6`}>Add a New Place</Text>

          {/* Search Bar */}
          <TextInput
            style={tw`bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md p-3 mb-4 w-3/4`}
            placeholder="Search for a place..."
            placeholderTextColor="#aaa"
            value={searchTerm}
            onChangeText={setSearchTerm}
          />

          {/* Star Rating System */}
          <View style={tw`flex-row mb-4`}>
            {Array.from({ length: 5 }, (_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedRating(index + 1)}
                style={tw`mr-1`}
              >
                <Ionicons
                  name={selectedRating > index ? 'star-sharp' : 'star-outline'} // Filled or outline based on rating
                  size={32} // Adjust size as needed
                  color="#FFD700" // Gold color for stars
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Create Place Button */}
          <TouchableOpacity
            style={tw`bg-blue-600 rounded-md p-3 w-3/4`}
            onPress={handleCreatePlace}
          >
            <Text style={tw`text-white text-center font-bold`}>Add Place</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePlace;


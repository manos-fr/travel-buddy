// app/create/index.tsx
import React, { useState } from 'react';
import { Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useFocusEffect } from '@react-navigation/native';
import messages from '../../constants/createListMessages';
import { useRouter } from 'expo-router';

const CreatePage = () => {
  const [randomMessage, setRandomMessage] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigation = useRouter();

  // Function to select a random message
  const getRandomMessage = (): string => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  // Use focus effect to set the random message and reset selection when the tab is focused
  useFocusEffect(
    React.useCallback(() => {
      setRandomMessage(getRandomMessage());
      setSelectedOption(''); // Reset selection on focus
    }, [])
  );

  // Select option logic
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  // Handle proceed navigation based on selected option
  const handleProceed = () => {
    if (selectedOption === 'List') {
      navigation.push('create/createList');
    } else if (selectedOption === 'Place') {
      navigation.push('create/createPlace'); // Navigate to CreatePlace
    } else {
      console.log("Please select an option.");
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-white font-semibold text-lg text-center mb-6`}>
            {randomMessage}
          </Text>

          {/* Radio Button Group */}
          <View style={tw`flex-row items-center mb-6`}>
            {/* List Option */}
            <TouchableOpacity
              style={[ 
                tw`flex-1 py-3 items-center justify-center rounded-l-full`,
                {
                  backgroundColor: selectedOption === 'List' ? 'linear-gradient(90deg, #0D74F4, #0DFFA8)' : 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2,
                  borderColor: selectedOption === 'List' ? '#0DFFA8' : 'rgba(255, 255, 255, 0.3)',
                  shadowColor: '#0D74F4',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 5,
                },
              ]}
              onPress={() => handleOptionSelect('List')}
            >
              <Text style={tw`text-white font-semibold`}>List</Text>
            </TouchableOpacity>

            {/* Place Option */}
            <TouchableOpacity
              style={[ 
                tw`flex-1 py-3 items-center justify-center rounded-r-full`,
                {
                  backgroundColor: selectedOption === 'Place' ? 'linear-gradient(90deg, #0DFFA8, #0D74F4)' : 'rgba(255, 255, 255, 0.1)',
                  borderWidth: 2,
                  borderColor: selectedOption === 'Place' ? '#0DFFA8' : 'rgba(255, 255, 255, 0.3)',
                  shadowColor: '#0DFFA8',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.5,
                  shadowRadius: 10,
                  elevation: 5,
                },
              ]}
              onPress={() => handleOptionSelect('Place')}
            >
              <Text style={tw`text-white font-semibold`}>Place</Text>
            </TouchableOpacity>
          </View>

          {/* Proceed Button */}
          <TouchableOpacity
            style={[ 
              tw`w-3/4 rounded-lg py-4 mb-4 items-center justify-center`,
              {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.25,
                shadowRadius: 6,
                elevation: 5,
              }
            ]}
            onPress={handleProceed}  // Call handleProceed on press
          >
            <Text style={tw`text-white text-lg font-semibold`}>
              {selectedOption ? `Proceed to Add ${selectedOption}` : 'Select an Option'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePage;

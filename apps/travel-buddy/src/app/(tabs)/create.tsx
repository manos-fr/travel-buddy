import { Text, SafeAreaView, ScrollView, View, TouchableOpacity } from 'react-native';
import React,{ useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import tw from 'twrnc';
import messages from '../../constants/createListMessages';

const CreatePage = () => {
    const [randomMessage, setRandomMessage] = useState<string>('');

    const getRandomMessage = (): string => {
      const randomIndex = Math.floor(Math.random() * messages.length);
      return messages[randomIndex];
    };
  
    useFocusEffect(
        React.useCallback(() => {
          setRandomMessage(getRandomMessage());
        }, [])
      );


  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black dark:text-white font-semibold text-lg text-center mb-6`}>
            {randomMessage}
          </Text>
          
          
          <TouchableOpacity 
            style={tw`w-3/4 bg-blue-500 rounded-lg py-4 mb-4`}
            onPress={() => console.log('Navigate to Add a List')}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>Add a List</Text>
          </TouchableOpacity>
          
          
          <TouchableOpacity 
            style={tw`w-3/4 bg-green-500 rounded-lg py-4`}
            onPress={() => console.log('Navigate to Add a Place')}
          >
            <Text style={tw`text-white text-center font-semibold text-lg`}>Add a Place</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePage;

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';

const CreateList = () => {
  const [listName, setListName] = useState<string>('');
  const [listDescription, setListDescription] = useState<string>('');
  const [listImage, setListImage] = useState<string | null>(null); // State to hold the image URI

  // Function to handle list creation logic
  const handleCreateList = () => {
    if (!listName) {
      Alert.alert("List Name Required", "Please enter a name for your list.");
      return;
    }
    // Handle list creation logic here
    Alert.alert("List Created", `Name: ${listName}, Description: ${listDescription}`);
    // Clear inputs
    setListName('');
    setListDescription('');
    setListImage(null);
  };

  // Function to handle image picking
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission Required", "Permission to access the gallery is required.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const successResult = result as ImagePicker.ImagePickerSuccessResult;
      setListImage(successResult.assets[0].uri); // Set the URI from the assets array
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black dark:text-white font-bold text-2xl mb-6`}>Create a New List</Text>

          {/* Image and Text Input Section */}
          <View style={tw`flex-row items-start w-full px-4 mb-6`}>
            
            {/* Image Upload Section on the left */}
            <TouchableOpacity onPress={pickImage} style={tw`mr-4`}>
              {listImage ? (
                <Image source={{ uri: listImage }} style={tw`w-32 h-32 rounded-lg`} />
              ) : (
                <View style={tw`w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg items-center justify-center`}>
                  <Text style={tw`text-gray-700 dark:text-gray-300 text-center`}>Upload List Photo</Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Text Input Fields on the right */}
            <View style={tw`flex-1 justify-center mt-4`}>
              {/* List Name Input */}
              <TextInput
                style={tw`bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md p-3 mb-4`}
                placeholder="List Name"
                placeholderTextColor="#aaa"
                value={listName}
                onChangeText={setListName}
              />

              {/* List Description Input */}
              <TextInput
                style={tw`bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md p-3`}
                placeholder="Description (optional)"
                placeholderTextColor="#aaa"
                value={listDescription}
                onChangeText={setListDescription}
              />
            </View>
          </View>

          {/* Create List Button */}
          <TouchableOpacity
            style={tw`bg-blue-600 rounded-md p-3 w-3/4`}
            onPress={handleCreateList}
          >
            <Text style={tw`text-white text-center font-bold`}>Create List</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateList;

import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';
import { useCreateListMutation } from '../../graphql/__generated__/graphql'; 
import { useGraphQlClient } from '../../hooks/useGraphQlClient';
import { useRouter } from 'expo-router';

const CreateList: React.FC = () => {
  const [listName, setListName] = useState<string>('');
  const [listDescription, setListDescription] = useState<string>('');
  const [listImage, setListImage] = useState<string | null>(null);
  const [ownerId, setOwnerId] = useState<number>(1); //Should modify to get current user's id

  const navigation = useRouter();

  // Use the useCreateListMutation hook
  const [createListMutation, { loading, error }] = useCreateListMutation({
    client: useGraphQlClient(),
  });

  const handleCreateList = async () => {
    if (!listName) {
      Alert.alert("List Name Required", "Please enter a name for your list.");
      return;
    }

    try {
      const { data } = await createListMutation({
        variables: {
          name: listName,
          description: listDescription || null,
          photo: listImage || null,
          owner: ownerId, 
        },
      });

      if (data?.insert_lists_one) {
        console.log('List created successfully:', data.insert_lists_one);
        Alert.alert(
          "Success",
          "List created successfully.",
          [
            {
              text: "OK",
              onPress: () => navigation.push('/my-places'), // Navigate to MyPlaces on OK press
            },
          ]
        );
        // Clear inputs
        setListName('');
        setListDescription('');
        setListImage(null);
      } else {
        Alert.alert("Error", "List creation failed.");
      }
    } catch (error) {
      console.error('Mutation error:', error);
      const errorMessage = (error as Error).message || "An error occurred.";
      Alert.alert('Failed to create list', errorMessage);
    }
  };

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
      setListImage(successResult.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black dark:text-white font-bold text-2xl mb-6`}>Create a New List</Text>

          <View style={tw`flex-row items-start w-full px-4 mb-6`}>
            <TouchableOpacity onPress={pickImage} style={tw`mr-4`}>
              {listImage ? (
                <Image source={{ uri: listImage }} style={tw`w-32 h-32 rounded-lg`} />
              ) : (
                <View style={tw`w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg items-center justify-center`}>
                  <Text style={tw`text-gray-700 dark:text-gray-300 text-center`}>Upload List Photo</Text>
                </View>
              )}
            </TouchableOpacity>

            <View style={tw`flex-1 justify-center mt-4`}>
              <TextInput
                style={tw`bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md p-3 mb-4`}
                placeholder="List Name"
                placeholderTextColor="#aaa"
                value={listName}
                onChangeText={setListName}
              />
              <TextInput
                style={tw`bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md p-3`}
                placeholder="Description (optional)"
                placeholderTextColor="#aaa"
                value={listDescription}
                onChangeText={setListDescription}
              />
            </View>
          </View>

          <TouchableOpacity
            style={tw`bg-blue-600 rounded-md p-3 w-3/4`}
            onPress={handleCreateList}
            disabled={loading} // Disable button when loading
          >
            <Text style={tw`text-white text-center font-bold`}>
              {loading ? 'Creating...' : 'Create List'}
            </Text>
          </TouchableOpacity>

          {error && <Text style={tw`text-red-500`}>Error: {error.message}</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateList;

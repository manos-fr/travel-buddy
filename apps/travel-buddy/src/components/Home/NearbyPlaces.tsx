import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { Place } from '../../types/Place';
import tw from 'twrnc';

interface NearbyPlacesProps {
  places: Place[];
}

const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ places }) => {
  const renderItem = ({ item }: { item: Place }) => (
    <TouchableOpacity
      style={tw`rounded-2xl border border-gray-300 p-4 mr-4 w-40 bg-white dark:bg-gray-700`}
    >
      <Text style={tw`text-lg font-semibold mb-1 text-black dark:text-white`}>
        {item.name}
      </Text>
      <Text style={tw`text-gray-600 dark:text-gray-300`}>{item.type}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={places}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default NearbyPlaces;

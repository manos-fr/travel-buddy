import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ActivityItem } from '../../types/ActivityItem';
import Avatar from '../common/Avatar';
import tw from 'twrnc';

interface ActivityFeedProps {
  activities: ActivityItem[];
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const renderItem = ({ item }: { item: ActivityItem }) => (
    <View style={tw`flex-row border-t border-gray-300 py-4 mb-3`}>
      <Avatar source={item.avatarUrl} size={10} />
      <View style={tw`ml-3 flex-1`}>
        <Text style={tw`text-gray-800 dark:text-white font-semibold`}>
          {item.username}
        </Text>
        <Text style={tw`text-gray-600 dark:text-gray-200`}>{item.text}</Text>
        <Text style={tw`text-gray-500 text-sm mt-1`}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={activities}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ActivityFeed;

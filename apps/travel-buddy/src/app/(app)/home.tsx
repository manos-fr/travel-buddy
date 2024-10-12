import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import tw from 'twrnc';
import { useGetUsersQuery } from '../../graphql/__generated__/graphql';
import { useGraphQlClient } from '../../hooks/useGraphQlClient';

export const Home = () => {
  const { data } = useGetUsersQuery({
    client: useGraphQlClient(),
  });

  console.log(data);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={tw`flex items-center p-4`}>
          <Text style={tw`font-bold text-3xl text-center mb-2`}>
            The best users are:
          </Text>
          <Text style={tw`text-xl text-center`}>
            {data?.users?.length
              ? data.users.map((user) => user.name).join(', ')
              : 'None found'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

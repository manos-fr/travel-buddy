import { Text, SafeAreaView, ScrollView, View } from 'react-native';
import tw from 'twrnc';

const Maps = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black dark:text-white font-semibold text-5xl`}>
            Maps Page
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Maps;

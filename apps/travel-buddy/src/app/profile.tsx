import { Text, SafeAreaView, ScrollView, View } from 'react-native';
import BackButton from '../components/navigation/BackButton';
import tw from 'twrnc';

const Profile = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-white dark:bg-black`}>
      <ScrollView contentContainerStyle={[tw`flex-1`, { paddingBottom: 80 }]}>
        <BackButton />
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black dark:text-white font-semibold text-5xl`}>
            Profile Page
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

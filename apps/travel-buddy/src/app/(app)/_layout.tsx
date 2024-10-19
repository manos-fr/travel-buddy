import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { useDeviceContext } from 'twrnc';
import tw from 'twrnc';
import BottomNavbar from '../../components/Navigation/BottomNavBar';

export default function AppLayout() {
  useDeviceContext(tw);

  return (
    <SafeAreaProvider>
      <View style={tw`flex-1 bg-white dark:bg-black`}>
        <View style={tw`flex-1`}>
          <Slot />
        </View>
        <BottomNavbar />
      </View>
    </SafeAreaProvider>
  );
}

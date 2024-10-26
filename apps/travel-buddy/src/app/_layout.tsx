import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDeviceContext } from 'twrnc';
import tw from 'twrnc';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 20,
    },
    mutations: {
      onError: (error) => {
        console.log({ error });
      },
    },
  },
});

export default function Root() {
  useDeviceContext(tw);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider style={tw`bg-white dark:bg-black`}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

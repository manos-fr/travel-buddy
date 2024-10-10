import { Redirect, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function Index() {
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;
  }, [navigationState?.key]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {!navigationState?.key ? (
        <Text>{'LOADING...'}</Text>
      ) : (
        <Redirect href={'/home'}></Redirect>
      )}
    </View>
  );
}

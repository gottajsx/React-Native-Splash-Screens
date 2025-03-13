import 'react-native-gesture-handler'; // ⚠️ Important : doit être en tout premier
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
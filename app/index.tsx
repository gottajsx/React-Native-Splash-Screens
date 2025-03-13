import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/MarkdownDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const description = `
# Animated splash screen
`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Splashscreen' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="animation" asChild>
        <Button title="Go to the animation" />
      </Link>

      <Link href="splash" asChild>
        <Button title="Splash screen animation" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
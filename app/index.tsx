import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import MarkdownDisplay from '@/components/MarkdownDisplay';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Onboarding Example' }} />

      <Link href="onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
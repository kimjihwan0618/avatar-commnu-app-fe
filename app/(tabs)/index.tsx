import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable onPress={() => router.push('/explore')}>
        <Text>홈스크린</Text>
      </Pressable>
    </SafeAreaView>
  );
}

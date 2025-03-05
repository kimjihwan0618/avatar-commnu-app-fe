import { SafeAreaView, View, Text, StyleSheet, TextInput, Button, Pressable } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="버튼" onPress={() => router.push("/auth")} />
    </SafeAreaView>
  );
}

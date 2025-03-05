import { Tabs } from "expo-router";
import { colors } from "@/constants";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.ORANGE_600,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "내 프로필",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons
              name={focused ? "person-circle-outline" : "person-circle-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "설정",
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

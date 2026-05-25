import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="signup" />
      <Stack.Screen name="index" />
      <Stack.Screen name="tasks" />
      <Stack.Screen name="habits" />
      <Stack.Screen name="progress" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { signIn } from "@/services/authService";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log("Login button pressed");

    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please enter email and password.");
      return;
    }

    const { data, error } = await signIn(email.trim(), password);

    if (error) {
      console.log("Login error:", error.message);
      Alert.alert("Login failed", error.message);
      return;
    }

    console.log("Login data:", data);

    router.replace("/tasks");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 32, fontWeight: "700", marginBottom: 12 }}>
        Cadence
      </Text>

      <Text style={{ marginBottom: 24 }}>
        Your habits. Tasks. Goals. All in one place.
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 12,
          padding: 14,
          marginBottom: 12,
        }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 12,
          padding: 14,
          marginBottom: 20,
        }}
      />

      <Pressable
        onPress={handleLogin}
        style={{
          backgroundColor: "#6C63FF",
          padding: 16,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>
          Log In
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/signup")}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Don&apos;t have an account? Sign up
        </Text>
      </Pressable>
    </View>
  );
}
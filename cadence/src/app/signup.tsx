import { useState } from "react";
import { Alert, Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { signUp } from "@/services/authService";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    console.log("Signup button pressed");

    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please enter email and password.");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Weak password", "Password must be at least 6 characters.");
      return;
    }

    const { data, error } = await signUp(email.trim(), password);

    if (error) {
      console.log("Signup error:", error.message);
      Alert.alert("Signup failed", error.message);
      return;
    }

    console.log("Signup data:", data);

    Alert.alert(
      "Account created",
      "If email confirmation is enabled, check your email before logging in."
    );

    router.replace("/login");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 32, fontWeight: "700", marginBottom: 12 }}>
        Create Account
      </Text>

      <Text style={{ marginBottom: 24 }}>
        Start building your rhythm with Cadence.
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
        onPress={handleSignup}
        style={{
          backgroundColor: "#6C63FF",
          padding: 16,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>
          Sign Up
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/login")}>
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Already have an account? Log in
        </Text>
      </Pressable>
    </View>
  );
}
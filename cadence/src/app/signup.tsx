import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { signUp } from "@/services/authService";
import { TextInputField } from "@/components/ui/TextInputField";
import { colors, radius, spacing, typography } from "@/constants/theme";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
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
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Start building your rhythm with Cadence.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInputField
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.inputGap} />
          <TextInputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <View style={styles.buttonGap} />

          <Pressable style={styles.primaryButton} onPress={handleSignup}>
            <Text style={styles.primaryButtonText}>Sign up</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => router.push("/login")}>
          <Text style={styles.loginLink}>Already have an account? Log in</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    gap: spacing.xl,
  },
  header: {
    gap: spacing.sm,
  },
  title: {
    ...typography.screenTitle,
    color: colors.ink,
  },
  subtitle: {
    ...typography.body,
    color: colors.mutedText,
  },
  form: {
    gap: 0,
  },
  inputGap: {
    height: spacing.sm,
  },
  buttonGap: {
    height: spacing.md,
  },
  primaryButton: {
    backgroundColor: colors.ink,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: "center",
  },
  primaryButtonText: {
    color: colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
  loginLink: {
    ...typography.body,
    color: colors.mutedText,
    textAlign: "center",
  },
});

import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { signIn } from "@/services/authService";
import { TextInputField } from "@/components/ui/TextInputField";
import { colors, radius, spacing, typography } from "@/constants/theme";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing fields", "Please enter email and password.");
      return;
    }

    const { data, error } = await signIn(email.trim(), password);

    if (error) {
      Alert.alert("Login failed", error.message);
      return;
    }

    console.log("Login data:", data);
    router.replace("/tasks");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.wordmark}>Cadence</Text>
          <Text style={styles.subtitle}>
            One calm place for habits, tasks, and goals.
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

          <Pressable style={styles.primaryButton} onPress={handleLogin}>
            <Text style={styles.primaryButtonText}>Log in</Text>
          </Pressable>

          <View style={styles.buttonGap} />

          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.secondaryButtonText}>Sign up</Text>
          </Pressable>
        </View>

        <View style={styles.taglineCard}>
          <Text style={styles.taglineHeading}>Build rhythm, not pressure.</Text>
          <Text style={styles.taglineSubtitle}>
            Track what matters in a soft daily dashboard.
          </Text>
        </View>
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
  wordmark: {
    ...typography.hero,
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
  secondaryButton: {
    backgroundColor: colors.paleCream,
    borderRadius: radius.md,
    paddingVertical: 16,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: colors.ink,
    fontSize: 16,
    fontWeight: "600",
  },
  taglineCard: {
    backgroundColor: colors.paleBlue,
    borderRadius: radius.lg,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  taglineHeading: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.ink,
  },
  taglineSubtitle: {
    ...typography.body,
    color: colors.mutedText,
  },
});

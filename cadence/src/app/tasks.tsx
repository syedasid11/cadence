import { Text, View } from "react-native";

export default function TasksScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Text
        style={{
            
          fontSize: 28,
          fontWeight: "700",
        }}
      >
        Tasks Screen
      </Text>

      <Text style={{ marginTop: 8 }}>
        Login worked. You are now inside the app.
      </Text>
    </View>
  );
}
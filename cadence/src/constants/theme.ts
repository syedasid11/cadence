import { Platform } from "react-native";

export const colors = {
  background: "#F8F6EF",
  surface: "#FFFFFF",
  ink: "#010101",
  mutedText: "#8A8178",
  paleBlue: "#DDECEB",
  paleCream: "#FEF8CC",
  line: "#1F1B16",
  softBorder: "#E8DED2",
  success: "#B8C9A9",
  dangerSoft: "#E8A99A",
};

export const radius = {
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const fontFamily = Platform.select({
  ios: "Helvetica Neue",
  android: "sans-serif",
  default: "System",
});

export const typography = {
  hero: { fontSize: 48, fontWeight: "700" as const, fontFamily },
  screenTitle: { fontSize: 30, fontWeight: "700" as const, fontFamily },
  cardTitle: { fontSize: 22, fontWeight: "600" as const, fontFamily },
  body: { fontSize: 15, fontFamily },
  caption: { fontSize: 12, fontFamily },
};

import { Platform } from "react-native";

export const isIOS = Platform.OS === "ios";
export const colors = {
  background: "#131313",
  cardBackground: "#2C2C2C",
  textWhite: "#FFFFFFE5",
  textAccent: "#F1DEACE5",
  responseBackground: "#F1DEAC",
  responseText: "#292828E5",
  profileCardBackground: "#333",
  moreOptionsBackground: "#272727",
  border: "#000000",
};

export const fontSizes = {
  large: isIOS ? 20 : 24,
  medium: isIOS ? 18 : 20,
  small: isIOS ? 16 : 18,
};

export const padding = {
  small: "2%",
  medium: "8%",
  large: "12%",
};

export const margin = {
  small: 8,
  medium: 16,
  large: 20,
};

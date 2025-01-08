import { StyleSheet } from "react-native";

export const colors = {
  primary: "#6200EE",
  secondary: "#03DAC6",
  background: "#F5F5F5",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#757575",
  lightGray: "#E0E0E0",
  error: "#B00020",
  textPrimary: "#212121",
  textSecondary: "#757575",
};

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    margin: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});

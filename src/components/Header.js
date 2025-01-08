import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { colors, commonStyles } from "../constants/styles";

export default function Header() {
  const navigation = useNavigation();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>E-Shop</Text>

      {/* Cart Button with Quantity */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={styles.cartButton}
      >
        <Text style={styles.cartIcon}>🛒</Text>
        {/* Cart Quantity Badge */}
        {cartQuantity > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartQuantity}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: colors.white,
    ...commonStyles.shadow,
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  cartButton: {
    position: "relative",
    padding: 8,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: colors.error,
    borderRadius: 12,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});

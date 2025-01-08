import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { colors, commonStyles } from "../constants/styles";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {/* Product Image */}
      {product.image && (
        <Image source={{ uri: product.image }} style={styles.image} />
      )}

      {/* Product Title */}
      <Text style={styles.title}>{product.title}</Text>

      {/* Product Description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* Product Price */}
      <Text style={styles.price}>${product.price}</Text>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(addToCart(product))}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...commonStyles.card,
    ...commonStyles.shadow,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 12,
  },
  button: {
    ...commonStyles.button,
  },
  buttonText: {
    ...commonStyles.buttonText,
  },
});

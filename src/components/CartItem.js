import React from "react";
import { View, Text, Image, TextInput, Button, StyleSheet } from "react-native";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleRemove = () => {
    onRemove(item.id);
  };

  const handleQuantityChange = (event) => {
    onUpdateQuantity(item.id, event.nativeEvent.text);
  };

  return (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.itemDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TextInput
          style={styles.input}
          value={String(item.quantity)}
          onChange={handleQuantityChange}
          keyboardType="numeric"
          min="1"
        />
        <Button title="Remove" onPress={handleRemove} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
});

export default CartItem;

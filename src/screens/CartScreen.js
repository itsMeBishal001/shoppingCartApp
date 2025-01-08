import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/cartSlice";

export default function CartScreen() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => dispatch(removeFromCart(item.id))}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => dispatch(addToCart(item))}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      ListFooterComponent={() => (
        <View style={styles.footer}>
          <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => alert("Checkout functionality to be implemented")}
          >
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cartItem: {
    padding: 16,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 18,
    color: "#6200EE",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 8,
  },
  quantity: {
    marginHorizontal: 8,
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "#6200EE",
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
  },
  checkoutButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});

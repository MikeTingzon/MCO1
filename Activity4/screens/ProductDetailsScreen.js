import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Text style={styles.image}>📦</Text>
      </View>

      <Text style={styles.name}>{product.name}</Text>

      <Text style={styles.price}>{product.price}</Text>

      <Text style={styles.label}>Description</Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Custom Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Back to Products</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FF",
    padding: 25,
  },

  imageBox: {
    height: 220,
    borderRadius: 20,
    backgroundColor: "#EDEBFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },

  image: {
    fontSize: 90,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22223B",
  },

  price: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#4F46E5",
    marginTop: 8,
  },

  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#22223B",
    marginTop: 30,
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
    color: "#666",
  },

  buyButton: {
    backgroundColor: "#4F46E5",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 35,
  },

  buyText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  backButton: {
    backgroundColor: "#22223B",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

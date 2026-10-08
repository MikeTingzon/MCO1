import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$49.99",
    description:
      "Comfortable wireless headphones with clear sound and a long-lasting battery.",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "$79.99",
    description:
      "A stylish smart watch that tracks your activity and keeps you connected.",
  },
  {
    id: "3",
    name: "Gaming Mouse",
    price: "$29.99",
    description:
      "A responsive gaming mouse with adjustable sensitivity and RGB lighting.",
  },
  {
    id: "4",
    name: "Mechanical Keyboard",
    price: "$59.99",
    description:
      "A durable mechanical keyboard designed for gaming and productivity.",
  },
];

export default function ProductListScreen({ navigation }) {
  const showProduct = (product) => {
    navigation.navigate("Details", {
      product: product,
    });
  };

  const renderProduct = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => showProduct(item)}
      >
        <View style={styles.productIcon}>
          <Text style={styles.iconText}>📦</Text>
        </View>

        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>

          <Text style={styles.price}>{item.price}</Text>

          <Text style={styles.viewText}>
            Tap to view details →
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Our Products</Text>

      <Text style={styles.subtitle}>
        Choose a product to see more information.
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        showsVerticalScrollIndicator={false}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>← Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FF",
    padding: 20,
  },

  heading: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#22223B",
  },

  subtitle: {
    color: "#777",
    marginTop: 5,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },

  productIcon: {
    width: 60,
    height: 60,
    borderRadius: 15,
    backgroundColor: "#EDEBFF",
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    fontSize: 28,
  },

  productInfo: {
    flex: 1,
    marginLeft: 15,
  },

  productName: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#22223B",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4F46E5",
    marginTop: 5,
  },

  viewText: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
  },

  backButton: {
    backgroundColor: "#22223B",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4F46E5",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "My Store" }}
        />

        <Stack.Screen
          name="Products"
          component={ProductListScreen}
          options={{ title: "Products" }}
        />

        <Stack.Screen
          name="Details"
          component={ProductDetailsScreen}
          options={{ title: "Product Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
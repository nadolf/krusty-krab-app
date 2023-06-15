import * as React from "react";
import { Text, View, ScrollView, Button, TextInput } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuPage from "./menu";
import ProfilePage from "./account";

function OrderPage() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Order!</Text>
    </View>
  );
}

function NavigationBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Account"
      screenOptions={{
        tabBarActiveTintColor: "#41b6e6",
        headerShown: false
      }}
    >
      <Tab.Screen
        name="GALLEY GRUB"
        component={MenuPage}
        options={{
          tabBarLabel: "GALLEY GRUB",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderPage}
        options={{
          tabBarLabel: "ORDER",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="receipt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfilePage}
        options={{
          tabBarLabel: "ACCOUNT",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="fish" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const home = () => {
  return <NavigationBar />;
};

export default home;

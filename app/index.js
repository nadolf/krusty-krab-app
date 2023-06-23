import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuPage from "./menu";
import ProfilePage from "./account";
import OrderPage from "./order";

function NavigationBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Galley Grub"
      screenOptions={{
        tabBarActiveTintColor: "#41b6e6",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Galley Grub"
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

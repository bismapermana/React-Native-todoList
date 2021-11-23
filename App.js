import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Calculator from "./src/screens/Calculator";
import Todo from "./src/screens/Todo";
import { Ionicons } from "@expo/vector-icons";
import DoneTodo from "./src/screens/DoneTodo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const bottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name == "Todo") {
            iconName = focused ? "clipboard" : "clipboard-outline";
          } else if (route.name == "Completed") {
            iconName = focused ? "list" : "list-outline";
          } else {
            iconName = focused ? "calculator" : "calculator-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#FFA726",
        inactveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Todo"
        options={{ headerShown: false }}
        component={Todo}
      />
      <Tab.Screen
        name="Completed"
        options={{ headerShown: false }}
        component={DoneTodo}
      />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="main"
            component={bottomTab}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

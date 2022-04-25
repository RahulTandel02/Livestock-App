import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Blog from "../screens/blog";
import Loading from "../screens/loading";

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: { backgroundColor: "#96C63B" },
        headerTitleStyle: { color: "#fff", fontSize: 24 },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Blog"
        component={Blog}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;

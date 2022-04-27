import React, { useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import AppContext from "../context/appContext";
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/home/Home";
import Users from "../screens/users";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStack from "./homeStack";
import LivestockStack from "./livestockStack";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logOut, RetriveData } from "../actions/user";
import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import UserHeader from "../screens/userHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

export default function AppStack() {
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await AsyncStorage.setItem("storage", state.userToken);
      } catch (error) {
        console.log(error);
      }
      await dispatch(getUser(state.userToken));
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeStack") {
              iconName = require("../assets/home.png");
            } else if (route.name === "LivestockStack") {
              iconName = require("../assets/cow.png");
            } else if (route.name === "Users") {
              iconName = require("../assets/setting.png");
            }
            // You can return any component that you like here!
            return (
              // <MaterialCommunityIcons name={iconName} color={color} size={28} />
              <Image
                source={iconName}
                fadeDuration={0}
                style={{
                  width: 24,
                  height: 21,
                  tintColor: color,
                  marginTop: 10,
                }}
              />
            );
          },
          tabBarLabel: ({ focused, color }) => {
            let name;
            if (route.name === "HomeStack") {
              name = "Home";
            } else if (route.name === "LivestockStack") {
              name = "Livestock";
            } else if (route.name === "Users") {
              name = "User";
            }
            return (
              <Text
                style={{ color: color, fontSize: 16, fontFamily: "Poppins" }}
              >
                {name}
              </Text>
            );
          },
          tabBarActiveTintColor: "#E64E99",
          tabBarInactiveTintColor: "#E6F9E7",
          headerShown: false,
        })}
        initialRouteName="HomeStack"
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarStyle: { backgroundColor: "#96C63B", height: 65 },
          }}
        />
        <Tab.Screen
          name="LivestockStack"
          component={LivestockStack}
          options={{
            tabBarStyle: { backgroundColor: "#C5CE2C", height: 65 },
          }}
        />
        <Tab.Screen
          name="Users"
          component={Users}
          // options={{
          //   tabBarStyle: { backgroundColor: "#473120", height: 65 },
          //   headerTitleAlign: "center",
          //   headerStyle: { backgroundColor: "#473120" },
          //   headerTitleStyle: { color: "#E6F9E7", fontSize: 24 },
          //   headerTitle: ({ route }) => <UserHeader route={route} />,
          //   headerShown: true,
          // }}
          options={({ route }) => ({
            tabBarStyle: { backgroundColor: "#473120", height: 65 },
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#473120" },
            headerTitleStyle: { color: "#E6F9E7", fontSize: 24 },
            headerTitle: () => <UserHeader route={route} />,
            headerShown: true,
          })}
        />
      </Tab.Navigator>
    </AppContext.Provider>
  );
}

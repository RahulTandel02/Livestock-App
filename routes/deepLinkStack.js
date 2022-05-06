import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DummyScreen from "../screens/DummyScreen";
import Details from "../screens/details";
import { useSelector } from "react-redux";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import globalSytles from "../styles/globalSytles";

const DeepLinkStack = ({ route, navigation }) => {
  const state = useSelector((state) => state.user);
  const livestock = useSelector((state) => state.livestock);
  // const [isUsersLivestock, setIsUsersLivestock] = useState(false);

  const a = livestock.filter((item) => item._id === route.params.id);

  // console.log(livestock);
  //   console.log(route.params.id);
  useEffect(() => {
    if (state.userToken === null || a.length === 0) {
      navigation.replace("LogoutDetails", { id: route.params.id });
    } else {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "AppStack",
            params: {
              screen: "LivestockStack",
              params: {
                screen: "Details",
                params: { id: route.params.id, name: "Details" },
              },
            },
          },
        ],
      });
      //   navigation.navigate("AppStack", {
      //     screen: "LivestockStack",
      //     params: { screen: "Details", params: { id: id, name: "Details" } },
      //   });
    }
  }, []);
  return (
    <View style={globalSytles.container}>
      {/* <Text style={globalSytles.text}>Loading</Text> */}
      <ActivityIndicator size={"large"} color="#4e4e4e" />
    </View>
  );
};

export default DeepLinkStack;

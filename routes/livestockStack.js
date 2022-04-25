import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Blog from "../screens/blog";
import Loading from "../screens/loading";
import Livestock from "../screens/livestock/livestock";
import Form from "../screens/form";
import Details from "../screens/details";
import { useSelector } from "react-redux";
import HeaderDetails from "../screens/headerDetails";
import DetailsContext from "../context/detailsContext";

const Stack = createNativeStackNavigator();

function LivestockStack() {
  const state = useSelector((state) => state.user);
  const [modalState, setModalState] = React.useState(false);

  return (
    <DetailsContext.Provider value={{ modalState, setModalState }}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#C5CE2C" },
          headerTitleStyle: { color: "#E6F9E7", fontSize: 24 },
        }}
        initialRouteName="Livestock"
      >
        <Stack.Screen name="Livestock" component={Livestock} />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={({ route }) => ({
            headerShown: false,
          })}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ route, navigation }) => ({
            title: route.params.name,
            headerTitle: (props) => (
              <HeaderDetails navigation={navigation} id={route.params.id} />
            ),
          })}
        />
      </Stack.Navigator>
    </DetailsContext.Provider>
  );
}

export default LivestockStack;

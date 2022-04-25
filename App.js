import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Link, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Linking from "expo-linking";
// import Home from "./screens/Home";
import DummyScreen from "./screens/DummyScreen";
import AppStack from "./routes/appStack";
import { useSelector } from "react-redux";
import LoginStack from "./routes/loginStack";
import Details from "./screens/details";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Loading from "./screens/loading";
import { AntDesign } from "@expo/vector-icons";

// heroku
// figure out how to use this in expo apk
// https://expo.dev/artifacts/4650f031-56e9-494d-81fd-30a37aa4ce90

const prefix = Linking.createURL("/");
const Stack = createNativeStackNavigator();

const DetailsHeader = ({ navigation, title }) => {
  const state = useSelector((state) => state.user);
  return (
    <>
      <View
        style={{
          width: "100%",
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#E6F9E7",
            letterSpacing: 1,
          }}
        >
          {title}
        </Text>
        <AntDesign
          style={{
            right: 20,
            position: "absolute",
          }}
          name="close"
          size={24}
          color="#E6F9E7"
          onPress={() => {
            state.userToken != null
              ? navigation.replace("AppStack")
              : navigation.replace("Auth");
          }}
        />
      </View>
    </>
  );
};

function App() {
  let [fontsLoaded] = useFonts({
    "Great-Wishes": require("./assets/fonts/Great-Wishes.otf"),
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const [data, setData] = useState(null);
  const state = useSelector((state) => state.user);
  const linking = {
    prefixes: [prefix, "https://antibilious-bag.000webhostapp.com/openApp/"],
    config: {
      screens: {
        AppStack: {
          screens: {
            HomeStack: {
              screens: {
                Home: {
                  path: "home",
                },
              },
            },
            Users: {
              path: "user",
            },
          },
        },
        Details: {
          path: "details/:id",
        },
      },
    },
  };

  const handleDeepLink = (event) => {
    let data = Linking.parse(event.url);
    setData(data);
  };
  useEffect(() => {
    Linking.addEventListener("url", handleDeepLink);
    return () => {
      Linking.removeEventListener("url");
    };
  }, [data]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  if (state.isLoading) {
    return <Loading location={true} />;
  }

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading</Text>}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {state.userToken !== null && (
          <Stack.Screen name="AppStack" component={AppStack} />
        )}
        {state.userToken === null && (
          <Stack.Screen name="Auth" component={LoginStack} />
        )}
        <Stack.Screen
          name="Details"
          component={DummyScreen}
          options={({ navigation }) => {
            return {
              headerTitle: () => (
                <DetailsHeader navigation={navigation} title={"Details"} />
              ),
              headerShown: true,
              headerStyle: { backgroundColor: "#C5CE2C" },
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// keytool -list -v -keystore ~/.android/debug.keystore
//https://expo.dev/accounts/rahultandel/projects/demoagain/builds/7a0451ee-343d-4563-bbdf-8c098e9317dc

// https://expo.dev/accounts/rahultandel/projects/livestock_management/builds/fecf245a-17b8-460c-82da-9f662d650ec7

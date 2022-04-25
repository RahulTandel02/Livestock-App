import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import globalSytles from "../styles/globalSytles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logOut } from "../actions/user";
import AppContext from "../context/appContext";

const Users = ({ route }) => {
  const { setUserData, userData } = useContext(AppContext);
  // const [userData, setUserData] = useState({});
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const user = useSelector((state) => state.userData);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    // <View style={globalSytles.container}>
    //   <Text style={globalSytles.text}>Users Screen</Text>

    // </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.userView}>
        <View style={styles.userIcon}></View>
        <View style={styles.entriesView}>
          <Text style={styles.entryName}>Email</Text>
          <Text style={styles.userInfo}>{userData["email"]}</Text>
          {/* <TextInput
            style={styles.userInfo}
            value={userData["email"]}
            onChangeText={(text) => setUserData({ ...userData, email: text })}
          /> */}
        </View>
        <View style={styles.entriesView}>
          <Text style={styles.entryName}>Name</Text>
          <TextInput
            style={styles.userInfo}
            value={userData["name"]}
            onChangeText={(text) => setUserData({ ...userData, name: text })}
          />
        </View>
        <View style={styles.entriesView}>
          <Text style={styles.entryName}>Phone</Text>
          <TextInput
            style={styles.userInfo}
            value={userData["phone"]}
            onChangeText={(text) => setUserData({ ...userData, phone: text })}
          />
        </View>
        <View style={styles.entriesView}>
          <Text style={styles.entryName}>Address</Text>
          <TextInput
            style={styles.userInfo}
            value={userData["address"]}
            onChangeText={(text) => setUserData({ ...userData, address: text })}
          />
        </View>
        {/* <Button
          title="Logout"
          onPress={() => {
            Alert.alert("Confirm", "Are Sure You want to logout", [
              {
                text: "Yes",
                onPress: () => {
                  dispatch(logOut());
                },
              },
              {
                text: "No",
              },
            ]);
          }}
        /> */}
        <TouchableOpacity
          style={styles.logOutBtn}
          onPress={() => {
            Alert.alert("Confirm", "Are Sure You want to logout", [
              {
                text: "Yes",
                onPress: () => {
                  dispatch(logOut());
                },
              },
              {
                text: "No",
              },
            ]);
          }}
        >
          <Text style={styles.logOutTxt}>Logout</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Users;

const styles = StyleSheet.create({
  userView: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },
  userIcon: {
    height: 200,
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 40,
  },
  entriesView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "95%",
    alignSelf: "center",
    marginTop: 15,
  },
  userInfo: {
    flex: 3,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 1,
    fontFamily: "Poppins",
    fontSize: 16,
  },
  entryName: {
    flex: 1,
    fontFamily: "Poppins",
    fontSize: 16,
  },
  logOutBtn: {
    backgroundColor: "#473120",
    paddingHorizontal: 65,
    alignSelf: "center",
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 10,
  },
  logOutTxt: {
    color: "#fff",
    fontFamily: "Poppins",
    fontWeight: "bold",
    fontSize: 18,
  },
});

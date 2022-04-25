import React, { useContext } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AppContext from "../context/appContext";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions/user";

const UserHeader = ({ route }) => {
  //   route.params = {
  //     name: "hllo",
  //   };

  const dispatch = useDispatch();
  const { userData } = useContext(AppContext);
  const { _id } = userData;
  // console.log(_id);
  const handleSave = () => {
    Alert.alert("Success", "User Updated", [
      {
        text: "OK",
      },
    ]);
    dispatch(updateUser(_id, userData));
  };

  return (
    <View style={styles.headerView}>
      <Text style={styles.headerTitle}>User</Text>
      <Entypo
        name="save"
        size={24}
        color="#E6F9E7"
        style={styles.icon}
        onPress={handleSave}
      />
    </View>
  );
};

export default UserHeader;

const styles = StyleSheet.create({
  headerView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    minWidth: "100%",
    justifyContent: "center",
    position: "relative",
  },
  headerTitle: {
    fontSize: 25,
    color: "#E6F9E7",
  },
  icon: {
    right: 0,
    position: "absolute",
  },
});

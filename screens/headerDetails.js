import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { deletelivestock } from "../actions/livestock";
import { Menu, MenuItem, MenuDivider } from "react-native-material-menu";
import DetailsContext from "../context/detailsContext";

// https://expo.dev/artifacts/c7342929-6923-4d83-9b6b-9d76c9c86216

const HeaderDetails = ({ id, navigation }) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);
  const { setModalState, modalState } = useContext(DetailsContext);
  const showMenu = () => setVisible(true);
  const dispatch = useDispatch();
  // console.log(id);
  // const { id } = route.params;

  const handleDelete = () => {
    Alert.alert("Warning!", "Do you want to delete this Entry", [
      {
        text: "Yes",
        onPress: () => {
          dispatch(deletelivestock(id));
          navigation.replace("Livestock");
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Details</Text>
      <View style={styles.icon}>
        <Menu
          visible={visible}
          anchor={
            <MaterialIcons
              name="menu"
              size={24}
              color="#E6F9E7"
              onPress={showMenu}
            />
          }
          onRequestClose={hideMenu}
        >
          <MenuItem onPress={handleDelete}>Delete</MenuItem>
          <MenuItem onPress={() => setModalState(true)}>Edit</MenuItem>
        </Menu>
      </View>
      {/* <Text style={styles.icon}>Delete</Text> */}
    </View>
  );
};

export default HeaderDetails;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",

    transform: [{ translateX: -70 }],
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#E6F9E7",
    letterSpacing: 1,
  },
  icon: {
    right: 5,
    position: "absolute",
  },
  headerImg: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
});

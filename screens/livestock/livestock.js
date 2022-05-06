import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Image,
} from "react-native";
import globalSytles from "../../styles/globalSytles";
import { AntDesign } from "@expo/vector-icons";
import Form from "../form";
import { MaterialIcons } from "@expo/vector-icons";
import FormStatus from "../formStatus";
import { useSelector, useDispatch } from "react-redux";
import { getLivestock } from "../../actions/livestock";
import styles from "./styles";
import DetailsContext from "../../context/detailsContext";

// Make a MENU for EDIT,DELETE

// add search functionality

const Livestock = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userData);

  const state = useSelector((state) => state.user);

  const randomFunction = (id) => {
    navigation.navigate("Loading", { id: id, isLiveStockStack: true });
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (user) {
  //       await dispatch(getLivestock(user._id));
  //     }
  //   };
  //   fetchData();
  // }, []);

  const livestock = useSelector((state) => state.livestock);
  // console.log(livestock);
  const [search, setSearch] = useState("");
  let filter = livestock;

  filter = filter.filter((item) => {
    if (search === "") return item;
    if (item["name"].toLowerCase().includes(search.toLowerCase())) return item;
    return null;
  });

  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState(livestock);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        // onPress={() => }
        onPress={() => randomFunction(item._id)}
      >
        <View style={styles.container}>
          <Text style={styles.name}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const searchItem = (text) => {
    setSearch(text);
  };

  return (
    <>
      <Modal visible={openModal} animationType="slide">
        <View style={styles.modal}>
          <MaterialIcons
            name="close"
            color={"#fff"}
            size={25}
            onPress={() => setOpenModal(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <Form setOpenModal={setOpenModal} />
        </View>
      </Modal>
      <View style={styles.mainView}>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../../assets/search.png")}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search"
            style={styles.search}
            onChangeText={(text) => searchItem(text)}
          />
        </View>
        <FlatList
          data={filter ? filter : livestock}
          renderItem={renderItem}
          style={{ zIndex: -1 }}
          keyExtractor={(item) => item._id}
        />
      </View>
      <TouchableOpacity
        style={styles.formBtn}
        activeOpacity={0.5}
        onPress={() => setOpenModal(true)}
      >
        <AntDesign name="plus" size={35} color={"#fff"} />
      </TouchableOpacity>
    </>
  );
};

export default Livestock;

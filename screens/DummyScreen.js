import React, { useEffect, useState, useContext } from "react";
import { Text, View, StyleSheet, ScrollView, Alert } from "react-native";
import axios from "axios";
import Details from "./details";
import QRCode from "react-qr-code";
import DetailsContext from "../context/detailsContext";
import { useSelector } from "react-redux";
import { acc } from "react-native-reanimated";

let user_id = null;

const DummyScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [data, setData] = useState({});
  const [userData, setUserData] = useState({});
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        `https://livestockserverapi.herokuapp.com/user/livestock/${id}`
      );
      setData(data.data);

      // const data = await axios.get(`http://10.0.2.2:5000/user/livestock/${id}`);

      // const data = await axios.get(
      //   `http://f7f4-103-171-6-246.ngrok.io/user/livestock/${id}`
      // );
      // setData(data.data);
    };

    getData();

    if (data !== null) {
      user_id = data["user_id"];
      if (user_id) {
        fetchUserData();
      }
    }
  }, [id]);

  if (data === null) {
    Alert.alert(
      "Error",
      "This Animal Does not Exist, Press OK and you will be redirected",
      [
        {
          text: "OK",
          onPress: () => {
            user.userToken != null
              ? navigation.replace("AppStack")
              : navigation.replace("Auth");
          },
        },
      ]
    );
    return <Text>Does not Exist</Text>;
  }
  // const { code } = data;
  const { status } = data;

  const fetchUserData = async () => {
    // const data = await axios.get(`http://10.0.2.2:5000/s/${user_id}`);
    const data = await axios.get(
      `https://livestockserverapi.herokuapp.com/s/${user_id}`
    );
    // const data = await axios.get(
    //   `http://f7f4-103-171-6-246.ngrok.io/s/${user_id}`
    // );
    setUserData(data.data);
  };

  if (status === "Lost") {
    return (
      <Text style={{ fontFamily: "Poppins", fontSize: 18 }}>
        This Animal is Lost Please Return to its owner on below address or
        contact the owner at {userData["phone"]} nad {userData["address"]}
      </Text>
    );
  }

  return (
    <ScrollView style={styles.detailsView}>
      {/* <View style={styles.qrCodeImage}>
        <QRCode value={code ? code : "ewfe"} size={117} />
      </View> */}
      {Object.keys(data !== null ? data : {})
        .filter((item) => {
          return (
            data[item] !== "" &&
            item !== "_id" &&
            item !== "code" &&
            item !== "user_id" &&
            item !== "__v"
          );
        })
        .map((item, i) => {
          return (
            <View style={styles.listView} key={i}>
              <Text style={styles.listText}>{item}</Text>
              <View style={styles.list}>
                <Text style={styles.listText1}>{data[item]}</Text>
              </View>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default DummyScreen;

const styles = StyleSheet.create({
  detailsView: {
    flex: 1,
    marginHorizontal: 10,
  },
  detailsTitle: {
    textAlign: "center",
    // fontFamily: "roboto-bold",
    fontSize: 20,
    letterSpacing: -1,
    marginTop: 25,
    textTransform: "uppercase",
  },
  qrCodeImage: {
    alignSelf: "center",
    marginTop: 20,
  },
  listView: {
    flexDirection: "row",
    alignItems: "center",
  },
  listText: {
    flex: 2,
    textTransform: "capitalize",
    fontFamily: "Poppins",
  },
  list: {
    flex: 3,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
  },
  listText1: {
    textTransform: "capitalize",
    fontFamily: "Poppins",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  modalToggle: {
    bottom: 10,
    backgroundColor: "#C5CE2C",
    padding: 10,
    borderRadius: 80,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});

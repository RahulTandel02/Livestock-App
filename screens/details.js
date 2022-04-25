import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Modal } from "react-native";
import { useSelector } from "react-redux";
import QRCode from "react-qr-code";
import Form from "./form";
import DetailsContext from "../context/detailsContext";
import { MaterialIcons } from "@expo/vector-icons";

const Details = ({ route }) => {
  const { modalState, setModalState } = useContext(DetailsContext);

  const { id } = route.params;
  const livestockData = useSelector((state) =>
    state.livestock.filter((item) => item._id === id)
  );

  if (livestockData === undefined) {
    return <Text>Does not exist</Text>;
  }
  console.log(`Out side useEffect ${id}`);

  // console.log(
  //   Object.keys(livestockData[0]).filter((item) => {
  //     return livestockData[0][item] !== "" && item !== "_id";
  //   })
  // );

  const code = livestockData[0] ? livestockData[0].code : "";
  return (
    <>
      <Modal visible={modalState} animationType="slide">
        <View style={styles.modal}>
          <MaterialIcons
            name="close"
            color={"#fff"}
            size={25}
            onPress={() => setModalState(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          <Form setOpenModal={setModalState} liveData={livestockData[0]} />
        </View>
      </Modal>
      <ScrollView style={styles.detailsView}>
        <View style={styles.qrCodeImage}>
          <QRCode value={code} size={117} />
        </View>
        <View>
          {Object.keys(livestockData[0])
            .filter((item) => {
              return (
                livestockData[0][item] !== "" &&
                item !== "_id" &&
                item !== "user_id" &&
                item !== "code" &&
                item !== "__v"
              );
            })
            .map((item, i) => {
              return (
                <View style={styles.listView} key={i}>
                  <Text style={styles.listText}>{item}</Text>
                  <View style={styles.list}>
                    <Text style={styles.listText1}>
                      {livestockData[0][item]}
                    </Text>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </>
  );
};

export default Details;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#E4E4E4",
  },
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

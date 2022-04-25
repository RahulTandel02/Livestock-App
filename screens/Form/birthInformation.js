import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import FormDatePicker from "../../shared/formDatePicker";
import globalSytles from "../../styles/globalSytles";
import InputText from "../../shared/inputText";

const BirthInformation = ({ data, setData, setStep, formik }) => {
  return (
    <View style={{ width: "75%" }}>
      <Text style={styles.header}>Review</Text>
      {Object.entries(formik.values)
        .filter(
          (i) =>
            i[1] !== "" &&
            i[0] !== "user_id" &&
            i[0] !== "_id" &&
            i[0] !== "__v" &&
            i[0] !== "code"
        )
        .map((item) => (
          <View style={styles.reviewView} key={item[0]}>
            <Text style={styles.review}>{item[0]}</Text>
            <View style={styles.textInput}>
              <Text>{item[1]}</Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default BirthInformation;

const styles = StyleSheet.create({
  reviewView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  review: {
    textTransform: "capitalize",
    fontSize: 16,
    fontFamily: "Poppins",
  },
  textInput: {
    backgroundColor: "#fff",
    flex: 5,
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 2,
    marginLeft: 15,
    height: 35,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  header: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Roboto",
  },
});

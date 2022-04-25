import React, { useState } from "react";
import {
  Button,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../styles/globalSytles";

const FormDatePicker = ({ data, setData, placeholder, formik }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState("");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    formik.values[r] = date.toDateString();
    // setData({ ...data, ["birthdate"]: date.toDateString() });
    hideDatePicker();
  };

  const r = placeholder.replace(/ /g, "");

  return (
    <>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <View style={styles.datePickerView}>
        <View style={styles.inputView}>
          <TextInput value={formik.values[r]} style={styles.textInput} />
        </View>
        <View>
          <TouchableOpacity
            style={globalStyles.btnView}
            onPress={showDatePicker}
          >
            <MaterialIcons
              name="calendar-today"
              size={25}
              style={globalStyles.btnText}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date()}
          />
        </View>
      </View>
    </>
  );
};

export default FormDatePicker;

const styles = StyleSheet.create({
  datePickerView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  inputView: {
    flex: 3,
    borderWidth: 1,
    paddingVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#707070",
  },
  textInput: {
    marginLeft: 15,
  },
  placeholder: {
    color: "#535353",
    fontSize: 16,
    fontFamily: "Poppins",
    textTransform: "capitalize",
  },
});

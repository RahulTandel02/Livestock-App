import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ErrorMessage } from "formik";

//make form validation before submission
const FormSelector = ({ array, data, placeholder, setData, formik }) => {
  const r = placeholder.replace(/ /g, "");

  const handleChangeInForm = () => {};

  return (
    <>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <View style={styles.pickerView}>
        <Picker
          selectedValue={formik.values[r]}
          onValueChange={formik.handleChange(r)}
          onBlur={formik.handleBlur(r)}
        >
          <Picker.Item value={""} enabled={true} style={styles.r} />
          {array.map((a) => (
            <Picker.Item
              label={`${a}`}
              value={`${a}`}
              style={styles.picker}
              key={`${a}`}
            />
          ))}
        </Picker>
        <Text style={styles.errTxt}>
          <ErrorMessage name={r} />
        </Text>
      </View>
    </>
  );
};

export default FormSelector;

const styles = StyleSheet.create({
  pickerView: {
    backgroundColor: "#fff",
    borderRadius: 18,
    borderColor: "#707070",
    borderWidth: 2,
    marginVertical: 10,
    position: "relative",
  },
  picker: {
    fontFamily: "Poppins",
  },
  placeholder: {
    textTransform: "capitalize",
    color: "#535353",
    fontSize: 16,
  },
  errTxt: {
    color: "red",
    position: "absolute",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 15,
  },
});

import React from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { ErrorMessage } from "formik";
import ErrorText from "./errorText";

const InputText = ({ placeholder, postfix, formik }) => {
  let r = placeholder.replace(/ /g, "");
  // const place = Object.keys(data).filter((d) => d === placeholder);
  const ismulti = placeholder === "description" ? true : false;
  return (
    <>
      {/* {errors.name && touched.name ? (
        <Text style={{ color: "red" }}>{errors.name}</Text>
      ) : null} */}
      <View style={{ position: "relative" }}>
        <Text style={styles.errTxt}>
          <ErrorMessage name={r} />
        </Text>
        <View style={styles.textInputView}>
          <Text style={styles.labelText}>{placeholder}</Text>
          <TextInput
            value={formik.values[r]}
            style={styles.textInput}
            onChangeText={formik.handleChange(r)}
            onBlur={formik.handleBlur(r)}
            maxLength={50}
            // onBlur={onBlur("name")}
            // id={id}
          />
          {postfix && <Text style={styles.postFix}>{postfix}</Text>}
        </View>
      </View>
    </>
  );
};

export default InputText;

const styles = StyleSheet.create({
  textInputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    flex: 4,
    fontSize: 16,
    backgroundColor: "#fff",
    height: "auto",
    borderRadius: 10,
    borderColor: "#707070",
    borderWidth: 2,
    paddingHorizontal: 15,
    fontFamily: "Poppins",
  },
  labelText: {
    flex: 2,
    textAlign: "center",
    fontSize: 16,
    color: "#535353",
    fontFamily: "Poppins",
    textTransform: "capitalize",
  },
  errTxt: {
    color: "red",
    marginTop: 5,
    marginLeft: 120,
  },
  postFix: {
    paddingVertical: 5,
    backgroundColor: "gray",
    color: "#fff",
    paddingHorizontal: 5,
    borderRadius: 5,
  },
});

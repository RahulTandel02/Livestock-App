import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import InputText from "../../shared/inputText";
import FormSelector from "../../shared/formSelector";
import globalSytles from "../../styles/globalSytles";
import FormDatePicker from "../../shared/formDatePicker";

const Physical = ({ setData, data, setStep, formik }) => {
  const array = ["Male", "Female"];
  const a = ["Yes", "No"];

  return (
    <View style={{ width: "75%" }}>
      <FormSelector
        data={data}
        setData={setData}
        placeholder="is the animal purchased"
        array={a}
        formik={formik}
      />
      {formik.values["istheanimalpurchased"] === "Yes" && (
        <>
          <FormDatePicker
            data={data}
            setData={setData}
            placeholder={"purchase date"}
            formik={formik}
          />
          {/* <InputText data={data} setData={setData} placeholder="isneutered"/> */}
          <InputText placeholder="price" formik={formik} postfix={"₹"} />
        </>
      )}
      {formik.values["istheanimalpurchased"] === "No" && (
        <>
          <FormDatePicker
            data={data}
            setData={setData}
            placeholder={"birth date"}
            formik={formik}
          />

          {/* <InputText data={data} setData={setData} placeholder="isneutered"/> */}

          <InputText
            data={data}
            setData={setData}
            placeholder="birth weight"
            formik={formik}
            postfix={"kg"}
          />
          <InputText
            data={data}
            setData={setData}
            placeholder="sire no"
            formik={formik}
          />
          <InputText
            data={data}
            setData={setData}
            placeholder="dam no"
            formik={formik}
          />
        </>
      )}
      <FormSelector
        data={data}
        setData={setData}
        placeholder="gender"
        formik={formik}
        array={array}
      />
    </View>
  );
};

export default Physical;

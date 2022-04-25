import React from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import InputText from "../../shared/inputText";
import FormSelector from "../../shared/formSelector";
import globalSytles from "../../styles/globalSytles";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BasicInformation = ({
  setData,
  data,
  setStep,
  isNext,
  setErrors,
  formik,
}) => {
  const array = ["Cow", "Buffalow", "Chicken"];
  return (
    <>
      <Text style={styles.formtitle}>ADD ANIMAL</Text>
      <View style={styles.formContainer}>
        {/* <TextInput
          onChangeText={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          value={formik.values.name}
        />
        <Text>
          <ErrorMessage name="name" />
        </Text> */}
        <InputText placeholder={"name"} formik={formik} />
        <InputText placeholder={"live no"} formik={formik} />
        <FormSelector
          array={array}
          data={data}
          setData={setData}
          placeholder="type"
          formik={formik}
        />
        <InputText placeholder={"description"} formik={formik} />
        <InputText placeholder={"color"} formik={formik} />
        <InputText placeholder={"tag no"} formik={formik} />
        {/* <Text>
          {data["name"] === "" ? <Text>Please Enter the Name</Text> : ""}
        </Text>
        <InputText data={data} setData={setData} placeholder="name" />
        <InputText data={data} setData={setData} placeholder="live no" /> */}
        {/* <InputText data={data} setData={setData} placeholder="type"/> */}
        {/* <FormSelector
          array={array}
          data={data}
          setData={setData}
          placeholder="type"
        />
        <InputText data={data} setData={setData} placeholder="description" />
        <InputText data={data} setData={setData} placeholder="color" />
        <InputText data={data} setData={setData} placeholder="tag no" /> */}

        {/* <FormSelector
          array={status}
          data={data}
          setData={setData}
          placeholder="status"
        /> */}
      </View>
    </>
    // <View style={{ width: "75%" }}>
    //   <Formik
    //     validationSchema={Yup.object().shape({
    //       email: Yup.string()
    //         .min(2, "Too Short")
    //         .max(50, "Too Long")
    //         .required("Required"),
    //     })}
    //     initialValues={{ email: "" }}
    //     onSubmit={(values) => console.log(values)}
    //   >
    //     {({
    //       handleChange,
    //       handleBlur,
    //       handleSubmit,
    //       values,
    //       errors,
    //       touched,
    //     }) => (
    //       <View>
    //         {errors.email && touched.email ? (
    //           <Text style={{ color: "red" }}>{errors.email}</Text>
    //         ) : null}
    //         <TextInput
    //           style={{ backgroundColor: "#fff" }}
    //           onChangeText={handleChange("email")}
    //           onBlur={handleBlur("email")}
    //           value={values.email}
    //         />
    //         <Button onPress={handleSubmit} title="Submit" />
    //       </View>
    //     )}
    //   </Formik>
    // </View>
  );
};

export default BasicInformation;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: "75%",
  },
  formtitle: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
    // fontFamily:'poppins-regular',
    paddingHorizontal: 70,
  },
  btnView: {
    backgroundColor: "purple",
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    // fontFamily:'poppins-regular',
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
  },
});

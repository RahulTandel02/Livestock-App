import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import InputText from "../shared/inputText";
import FormStatus from "./formStatus";
import BasicInformation from "./Form/basicInformation";
import Physical from "./Form/physical";
import Identification from "./Form/Identification";
import BirthInformation from "./Form/birthInformation";

import { useSelector, useDispatch } from "react-redux";
import { postLivestock } from "../actions/livestock";
import { Formik } from "formik";
import * as Yup from "yup";

// const multiForm = (step, data, setStep, setOpenModal) => {
//   switch (step) {
//     case 5:
//       return (
//         <ReviewForm data={data} setStep={setStep} setOpenModal={setOpenModal} />
//       );
//     default:
//       break;
//   }
// };

const Form = ({ setOpenModal, liveData }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.userData._id);
  const [step, setStep] = useState(1);
  console.log(liveData);
  const data = !liveData
    ? {
        user_id: id,
        liveno: "",
        name: "",
        type: "",
        breed: "",
        status: "",
        gender: "",
        color: "",
        description: "",
        tagno: "",
        tagcolor: "",
        birthdate: "",
        birthweight: "",
        istheanimalpurchased: "",
        purchasedate: "",
        purchasepirce: "",
        weight: "",
        damnno: "",
        sireno: "",
        deceaseddate: "",
        dryperiodstarting: "",
        dryperiod: "",
        lactatingperiodstarting: "",
        lactatingperiod: "",
        sickdate: "",
        disease: "",
        solddate: "",
        sellingprice: "",

        // vaccinelist: [],
      }
    : liveData;

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(2, "Name is Too Short")
      .matches(/^[aA-zZ\s]+$/, "No numbers are allowed"),
    type: Yup.string().required("Required"),
    liveno: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    color: Yup.string().required("Required"),
    tagno: Yup.string().required("Required"),
    istheanimalpurchased: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
    weight: Yup.string()
      .required("Required")
      .matches(/^\d+$/, "Only numbers allowed"),
    breed: Yup.string().required("Required"),
    price: Yup.string().matches(/^\d+$/, "Only numbers allowed"),
    birthweight: Yup.string().matches(/^\d+$/, "Only numbers allowed"),
  });

  const handleSubmit = () => {
    // dispatch(postLivestock(data))
    // setOpenModal(false);
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.formContainer} behavior="height">
        {/* <View style={{justifyContent:'flex-end'}}> */}
        {/* <Formik initialValues={data}></Formik> */}
        <Formik initialValues={data} validationSchema={validationSchema}>
          {(formik) => {
            return <FormStatus formik={formik} setOpenModal={setOpenModal} />;
          }}
          {/* <FormStatus
            setData={setData}
            data={data}
            setStep={setStep}
            setOpenModal={setOpenModal}
          /> */}
        </Formik>

        {/* </View> */}
      </KeyboardAvoidingView>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    width: "90%",
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#E4E4E4",
  },
  formtitle: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
    // fontFamily:'poppins-regular'
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

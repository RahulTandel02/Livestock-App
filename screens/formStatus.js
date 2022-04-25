import React, { useState } from "react";
import { Alert, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import BasicInformation from "./Form/basicInformation";
import Physical from "./Form/physical";
import Identification from "./Form/Identification";
import BirthInformation from "./Form/birthInformation";
import globalSytles from "../styles/globalSytles";
import { useDispatch } from "react-redux";
import { postLivestock, updatelivestock } from "../actions/livestock";
import { useSelector } from "react-redux";

const FormStatus = ({ formik, setOpenModal }) => {
  const [errors, setErrors] = useState(true);
  const allLiveStock = useSelector((state) => state.livestock).filter(
    (item) => item["_id"] === formik.values._id
  );

  // const [isNext, SetIsNext] = useState(false);
  const nextStyle = {
    nextBtnStyle: {
      backgroundColor: "#E64E99",
      borderRadius: 19,
    },
    nextBtnTextStyle: {
      fontFamily: "Poppins",
      color: "#fff",
      paddingHorizontal: 15,
    },
  };
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (allLiveStock.length === 0) {
      dispatch(postLivestock(formik.values));
    } else {
      // console.log(formik.values);
      dispatch(updatelivestock(formik.values._id, formik.values));
    }
    setOpenModal(false);
    Alert.alert("Success", "Entry Saved", [
      {
        text: "OK",
      },
    ]);
  };

  const handleNext = (validate) => {
    // console.log(Object.keys(formik.errors).filter((i) => validate.includes(i)));
    // // console.log(formik.errors);
    const obj = {};
    for (let i of validate) {
      obj[i] = true;
    }
    formik.setTouched(obj);
    if (
      formik.values[validate[0]] === "" ||
      Object.keys(formik.errors).filter((i) => validate.includes(i)).length > 0
    ) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  };
  return (
    // <View style={{flexDirection:'row'}}>
    //     <View style={styles.stepView}>
    //         <FontAwesome name={step == 1?'circle':'check-circle'} color={step == 1 ? "purple":"green"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Basic</Text>
    //     </View>
    //     <View style={styles.stepView}>
    //         <FontAwesome name={step < 2?'circle-o':step == 2?'circle':'check-circle'} color={step == 2 ? "purple":"green"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Physical </Text>
    //     </View>
    //     <View style={styles.stepView}>
    //         <FontAwesome  name={step < 3?'circle-o':step == 3?'circle':'check-circle'} color={step == 3 ? "purple":"green"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Identification</Text>
    //     </View>
    //     <View style={styles.stepView}>
    //         <FontAwesome  name={step < 4?'circle-o':'circle'}color={step == 4 ? "purple":"black"} size={20} style={styles.statusForm}/>
    //         <Text style={[styles.statusForm,{fontSize:13}]}>Birth</Text>
    //     </View>
    // </View>
    <View style={styles.stepView}>
      <ProgressSteps
        progressBarColor="#fff"
        activeStepIconColor="#E64E99"
        activeStepIconBorderColor="#E64E99"
        activeStepNumColor="#fff"
        disabledStepIconColor="#96C63B"
        completedStepIconColor="#C5CE2C"
        completedProgressBarColor="#E6F9E7"
      >
        <ProgressStep
          nextBtnStyle={nextStyle.nextBtnStyle}
          nextBtnTextStyle={nextStyle.nextBtnTextStyle}
          onNext={() => handleNext(["type", "name", "liveno"])}
          errors={errors}
        >
          <View style={{ alignItems: "center" }}>
            <BasicInformation
              // setData={setData}
              // data={data}
              // setStep={setStep}
              // isNext={isNext}
              // setErrors={setErrors}
              formik={formik}
            />
          </View>
        </ProgressStep>
        <ProgressStep
          nextBtnStyle={nextStyle.nextBtnStyle}
          nextBtnTextStyle={nextStyle.nextBtnTextStyle}
          previousBtnStyle={nextStyle.nextBtnStyle}
          previousBtnTextStyle={nextStyle.nextBtnTextStyle}
          // onNext={() => formik.vali}
          onNext={() =>
            handleNext([
              "istheanimalpurchased",
              "gender",
              "price",
              "birthweight",
            ])
          }
          errors={errors}
        >
          <View style={{ alignItems: "center" }}>
            <Physical formik={formik} />
          </View>
        </ProgressStep>
        <ProgressStep
          nextBtnStyle={nextStyle.nextBtnStyle}
          nextBtnTextStyle={nextStyle.nextBtnTextStyle}
          previousBtnStyle={nextStyle.nextBtnStyle}
          previousBtnTextStyle={nextStyle.nextBtnTextStyle}
          onNext={() => handleNext(["status", "breed", "weight"])}
          errors={errors}
        >
          <View style={{ alignItems: "center" }}>
            <Identification formik={formik} />
          </View>
        </ProgressStep>
        <ProgressStep
          onSubmit={() => handleSubmit()}
          nextBtnStyle={nextStyle.nextBtnStyle}
          nextBtnTextStyle={nextStyle.nextBtnTextStyle}
          previousBtnStyle={nextStyle.nextBtnStyle}
          previousBtnTextStyle={nextStyle.nextBtnTextStyle}
        >
          <View style={{ alignItems: "center" }}>
            <BirthInformation formik={formik} />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default FormStatus;

const styles = StyleSheet.create({
  statusForm: {
    textAlign: "center",
    marginBottom: 5,
    // fontFamily:'poppins-regular',
  },
  stepView: {
    flex: 1,
    marginHorizontal: -50,
  },
});

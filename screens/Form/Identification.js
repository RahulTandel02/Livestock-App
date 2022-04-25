import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import InputText from "../../shared/inputText";
import globalSytles from "../../styles/globalSytles";
import styles from "../livestock/styles";
import FormSelector from "../../shared/formSelector";
import FormDatePicker from "../../shared/formDatePicker";
import { AddVaccine } from "./addVaccine";

const Identification = ({ data, setData, setStep, formik }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [vaccine, setVaccine] = useState([]);
  const status = [
    "Active",
    "Deceased",
    "Dry",
    "Lactating",
    "Sick",
    "Sold",
    "Weening",
    "Lost",
  ];

  const updateStatus = (expections = []) => {
    const arr = [
      "deceaseddate",
      "dryperiodstarting",
      "dryperiod",
      "lactatingperiodstarting",
      "lactatingperiod",
      "sickdate",
      "solddate",
      "sellingprice",
      "disease",
    ];
    const res = arr.filter((i) => !expections.includes(i));
    for (let a of res) {
      formik.values[a] = "";
    }
  };

  if (
    formik.values["status"] === "Active" ||
    formik.values["status"] === "Weening"
  ) {
    updateStatus();
  } else if (formik.values["status"] === "Deceased") {
    updateStatus(["deceaseddate"]);
  } else if (formik.values["status"] === "Dry") {
    updateStatus(["dryperiodstarting", "dryperiod"]);
  } else if (formik.values["status"] === "Lactating") {
    updateStatus(["lactatingperiodstarting", "lactatingperiod"]);
  } else if (formik.values["status"] === "Sick") {
    updateStatus(["sickdate", "disease"]);
  } else {
    updateStatus(["solddate", "sellingprice"]);
  }
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ backgroundColor: "red", flex: 1 }}>
          <Text onPress={() => setModalVisible(false)}>Close</Text>
          <AddVaccine vaccine={vaccine} setVaccine={setVaccine} />
        </View>
      </Modal>
      <View style={{ width: "75%" }}>
        <InputText placeholder="breed" formik={formik} />
        <InputText placeholder="weight" formik={formik} postfix={"kg"} />
        <FormSelector
          data={data}
          setData={setData}
          placeholder="status"
          array={status}
          formik={formik}
        />
        {formik.values["status"] === "Deceased" && (
          <>
            <FormDatePicker placeholder={"deceased date"} formik={formik} />
          </>
        )}
        {formik.values["status"] === "Dry" && (
          <>
            <FormDatePicker
              placeholder={"dry period starting"}
              formik={formik}
            />
            <InputText
              placeholder="dry period"
              formik={formik}
              postfix={"days"}
            />
          </>
        )}
        {formik.values["status"] === "Lactating" && (
          <>
            <FormDatePicker
              placeholder={"lactating period starting"}
              formik={formik}
            />
            <InputText
              placeholder="lactating period"
              formik={formik}
              postfix={"days"}
            />
          </>
        )}
        {formik.values["status"] === "Sick" && (
          <>
            <FormDatePicker placeholder={"sick date"} formik={formik} />
            <InputText placeholder="disease" formik={formik} />
          </>
        )}
        {formik.values["status"] === "Sold" && (
          <>
            <FormDatePicker placeholder={"sold date"} formik={formik} />
            <InputText
              placeholder="selling price"
              formik={formik}
              postfix={"₹"}
            />
          </>
        )}
        {/* <Text
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: "teal",
            padding: 10,
            borderRadius: 10,
            color: "#fff",
          }}
        >
          Add Vaccine
        </Text>
        <FormSelector
          data={data}
          setData={setData}
          placeholder="vaccine list"
          array={vaccine}
          formik={formik}
        /> */}
      </View>
    </>
  );
};

export default Identification;

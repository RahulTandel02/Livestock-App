import React, { useState } from "react";
import { Text } from "react-native-paper";
import { View, TextInput } from "react-native";

export const AddVaccine = ({ vaccine, setVaccine }) => {
  const [vac, setVac] = useState("");
  return (
    <View>
      <TextInput
        value={vac}
        style={{ backgroundColor: "#fff" }}
        placeholder={"Vaccine name"}
        onChangeText={(text) => setVac(text)}
      />
      <Text onPress={() => setVaccine([...vaccine, vac])}>Submit</Text>
    </View>
  );
};

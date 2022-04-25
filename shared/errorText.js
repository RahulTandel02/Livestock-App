import React from "react";
import { StyleSheet } from "react-native";

const ErrorText = (props) => {
  return <Text className={styles.errTxt}>{props.children}</Text>;
};

export default ErrorText;

const styles = StyleSheet.create({
  errTxt: {
    color: "red",
  },
});

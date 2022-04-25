import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { postUser } from "../../actions/user";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import removeError from "../../actions/user";

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);

  if (error) {
    Alert.alert(error, error, [
      {
        text: "OK",
        onPress: () => dispatch(removeError()),
      },
    ]);
  }
  //   const [email, setEmail] = useState({
  //     text: "",
  //     focus: false,
  //     iconFocus: false,
  //   });
  //   const [password, setPassword] = useState({
  //     text: "",
  //     focus: false,
  //     iconFocus: false,
  //   });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    if (userData) {
      dispatch(postUser(userData));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "pradding" : "height"}
        style={[styles.loginContainer, { backgroundColor: "#96C63B" }]}
      >
        <Text style={styles.loginText}>Signup</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor={"#C7BFB8"}
          value={userData.name}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="@emaple.com"
          placeholderTextColor={"#C7BFB8"}
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />
        <TextInput
          style={styles.TextInput}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor={"#C7BFB8"}
          value={userData.password}
          onChangeText={(text) => setUserData({ ...userData, password: text })}
        />
        <Text style={styles.signInText}>
          Already have an account{" "}
          <Text onPress={() => navigation.navigate("Login")}>Login</Text>
        </Text>
        <TouchableOpacity
          style={[styles.loginBtn, { backgroundColor: "#E64E99" }]}
          onPress={handleSubmit}
        >
          <Text style={styles.loginBtnText}>Signup</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;

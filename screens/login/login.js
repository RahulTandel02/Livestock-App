import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import globalSytles from "../../styles/globalSytles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../actions/user";
import styles from "./styles";
import { removeError } from "../../actions/user";

const Login = ({ navigation }) => {
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

  // const [email, setEmail] = useState({
  //   text: "",
  //   focus: false,
  //   iconFocus: false,
  // });
  // const [password, setPassword] = useState({
  //   text: "",
  //   focus: false,
  //   iconFocus: false,
  // });

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (userData) {
      dispatch(
        loginUser({ email: userData.email, password: userData.password })
      );
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "pradding" : "height"}
          style={styles.loginContainer}
        >
          {/* {error ? <Text>{error}</Text> : ""} */}
          <Text style={styles.loginText}>Login</Text>
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
            onChangeText={(text) =>
              setUserData({ ...userData, password: text })
            }
          />
          <Text style={styles.signInText}>
            New User?
            <Text onPress={() => navigation.push("Signup")}>Sign</Text>
          </Text>
          <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Login;

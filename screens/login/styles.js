import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: "#C5CE2C",
    display: "flex",
    justifyContent: "center",
  },
  loginText: {
    fontFamily: "Great-Wishes",
    color: "#473120",
    marginLeft: 20,
    fontSize: 40,
    marginBottom: 60 - 36,
  },
  TextInput: {
    backgroundColor: "#E6F9E7",
    width: "90%",
    marginLeft: 20,
    height: 37,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: "#473120",
    marginTop: 36,
    fontFamily: "Poppins",
  },
  signInText: {
    alignSelf: "flex-end",
    marginRight: 20,
    fontSize: 10,
    marginTop: 10,
    fontFamily: "Poppins",
  },
  loginBtn: {
    backgroundColor: "#473120",
    width: "90%",
    alignSelf: "center",
    height: 50,
    borderRadius: 18,
    marginTop: 36,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtnText: {
    color: "#E6F9E7",
    fontSize: 18,
    fontFamily: "Poppins",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const globalSytles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // fontFamily:'roboto-bold'
  },
  formtitle: {
    textAlign: "center",
    fontSize: 25,
    marginBottom: 30,
    // fontFamily: "poppins-regular",
  },
  btnView: {
    backgroundColor: "purple",
    borderRadius: 5,
  },
  btnText: {
    color: "#fff",
    // fontFamily: "poppins-regular",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 18,
    paddingHorizontal: 15,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btnViewTest: {
    backgroundColor: "purple",
  },
});

export default globalSytles;

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import globalSytles from "../styles/globalSytles";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getBlogs } from "../actions/livestock";

const Loading = ({ navigation, route, location }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [data, setData] = useState([{ title: "", content: "", _id: "1" }]);
  let isLiveStockStack = undefined;
  let id = undefined;

  if (!location) {
    isLiveStockStack = route.params.isLiveStockStack;
    id = route.params.id;
  }

  useEffect(() => {
    if (!isLiveStockStack) {
      // const getData = async () => {
      //   const res = await axios.get("http://10.0.2.2:5000/blog");
      //   // const res = await axios.get(
      //   //   "https://livestockserverapi.herokuapp.com/blog"
      //   // );
      //   console.log(res.data);
      //   setData(res.data);
      //   if (data.title != "") {
      //     navigation.navigate("Home", {
      //       data: data,
      //     });
      //   }
      // };
      // getData();
      dispatch(getBlogs());
    } else {
      setTimeout(() => {
        navigation.replace("Details", { id: id });
      }, 1000);
    }
  }, []);

  return (
    <View style={globalSytles.container}>
      <Text style={globalSytles.text}>Loading</Text>
    </View>
  );
};

export default Loading;

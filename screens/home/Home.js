import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import axios from "axios";
import { useSelector } from "react-redux";

// Add Search Bar to search blog

const Home = ({ navigation, route }) => {
  const [data, setData] = useState([{ title: "", content: "", _id: "1" }]);
  const blogs = useState(useSelector((state) => state.blog));
  const [search, setSearch] = useState("");
  let filter = blogs[0];

  filter = filter.filter((item) => {
    if (search === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(search.toLowerCase())) {
      return item;
    }
    return null;
  });

  const searchItem = (text) => {
    setSearch(text);
    // if (text === "") {
    //   setBlogs(original);
    // } else {
    //   setBlogs(
    //     blogs.filter((item) => {
    //       if (text === "") {
    //         return item;
    //       } else {
    //         return item.title.toLowerCase().includes(text.toLowerCase());
    //       }
    //     })
    //   );
    // }
  };

  // useEffect(() => {
  //   const getData = async () => {
  //     // const res = await axios.get("http://10.0.2.2:5000/blog");
  //     const res = await axios.get(
  //       "https://livestockserverapi.herokuapp.com/blog"
  //     );
  //     // const res = await axios.get("http://f7f4-103-171-6-246.ngrok.io/blog");
  //     setData(res.data);
  //     setFilter(res.data);
  //     if (data.title != "") {
  //       navigation.navigate("Home", {
  //         data: data,
  //       });
  //     }
  //   };
  //   getData();
  // }, []);
  const Item = ({ data }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Blog", data)}>
      <View style={styles.item}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => <Item data={item} />;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={styles.container}>
          <View style={{ position: "relative" }}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              style={styles.search}
              onChangeText={(text) => searchItem(text)}
            />
          </View>
          <FlatList
            data={filter ? filter : blogs[0]}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E4E4E4",
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "90%",
    alignSelf: "center",
    marginVertical: 10,
    height: 76,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#9A9A9A",
    marginLeft: 30,
    fontFamily: "Roboto",
  },
  search: {
    backgroundColor: "#fff",
    height: 36,
    width: "90%",
    alignSelf: "center",
    borderRadius: 19,
    paddingHorizontal: 35,
    marginBottom: 15,
    marginTop: 25,
    fontFamily: "Poppins",
    color: "#9A9A9A",
  },
  searchIcon: {
    height: 15,
    width: 15,
    position: "absolute",
    left: 35,
    top: 35,
    zIndex: 100,
    tintColor: "#9A9A9A",
  },
});

export default Home;

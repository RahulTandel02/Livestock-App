import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import globalSytles from "../styles/globalSytles";
import { useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const Blog = ({ route }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);
  const data = route.params;

  const source = {
    html: data.content,
  };
  const { width } = useWindowDimensions();

  const tagStyle = {
    body: {
      fontSize: 16,
      // fontFamily: 'roboto-regular'
    },
    table: {
      borderWidth: 1,
    },
    td: {
      borderWidth: 1,
    },
    th: {
      borderWidth: 1,
    },
  };
  return (
    <ScrollView style={{ padding: 10 }}>
      {isLoading ? (
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagStyle}
        />
      ) : (
        <View style={globalSytles.container}>
          <Text style={globalSytles.text}>Loading</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default Blog;

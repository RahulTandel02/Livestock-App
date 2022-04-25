import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { Entypo } from '@expo/vector-icons';


const FloatingActionButton = () => {
    return(
        <View style={{flex:1, backgroundColor: '#f3f3f3',position:'absolute'}}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton buttonColor="rgba(231,76,60,1)"
            onPress={() => console.log("Press Detected")}
            
        />
      </View>
    )
}

export default FloatingActionButton


const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import { StackNavigator } from "react-navigation";
import Note from "./Note";
import HomeScreen from './HomeScreen';

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: Note }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default () => <AppNavigator />;
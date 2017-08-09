import React from "react";
import { View, Text, TextInput } from "react-native";

export default class Note extends React.Component {
  render() {
    return (
      <View>
        <TextInput
          placeholder="test"
        />
      </View>
    );
  }
}

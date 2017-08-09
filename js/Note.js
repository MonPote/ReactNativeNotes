import React from "react";
import { View, Text, TextInput } from "react-native";

export default class Note extends React.Component {
  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{
            borderColor: "black",
            borderBottomColor: "blue",
            borderWidth: 1
          }}
          placeholder="test"
          multiline={true}
        />
      </View>
    );
  }
}

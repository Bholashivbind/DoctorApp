import { TextInput } from "react-native";
import React from "react";
import { black, white } from "./Constants";

const Field = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: black, white,
        paddingHorizontal: 75,
        width: 300,
        height: 40,
        backgroundColor: 'yellow',
        marginBottom:25,
        


      }}
      placeholderTextColor={black}></TextInput>
  );
};

export default Field;

import React from "react";
import { View, ImageBackground } from "react-native";

const Background = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("./assets/docBackground.jpg")}
        style={{ height:'100%', width:"auto" }}
      >
        <View style={{ position: "absolute" }}>{children}</View>
      </ImageBackground>
    </View>
  );
};

export default Background;

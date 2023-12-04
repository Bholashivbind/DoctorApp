
import { View, Text, TouchableOpacity} from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import {black, darkGreen, white} from "./Constants";
import Btn from "./Btn";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text style={{ color: "black",fontSize: 64,fontWeight: "bold",margin: 40,}}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: "olivedrab",
            height: 862,
            width: 400,
            borderTopRightRadius: 100,
            paddingTop: 50,
            alignItems: "center",
          }}>
          <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: "20",
              paddingTop: 10,
              paddingBottom: 30,
            }}
          >
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={"email-address"}
            style={{ width: 10, marginBottom: 30 }}
          />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            style={{ marginBottom: 20, width: 20 }}
          />
          <View
            style={{
              alignItems: "flex-end",
              marginBottom: 100,
              width: "55%",
              paddingRight: 10,
            }}
          >
            <Text style={{ color: white, fontWeight: "bold", fontSize: 16 }}>
              Forgot Password
            </Text>
          </View>

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            Press={() => {
              alert("Logged In")
              props.navigation.navigate("HomeScreen")
            }}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={{ color: black, fontWeight: "bold", fontSize: 16 }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;

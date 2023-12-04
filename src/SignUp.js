import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Background from "./Background";
import Field from "./Field";
import { black, darkGreen, white } from "./Constants";
import Btn from "./Btn";

const SignUp = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "black",
            fontSize: 64,
            fontWeight: "bold",
            marginTop: 50,
          }}
        >
          Register
        </Text>
        <Text style={{ fontSize: 19, fontWeight: "bold", marginBottom: 40 }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: "olivedrab",
            height: 800,
            width: 400,
            borderTopRightRadius: 100,
            paddingTop: 60,
            alignItems: "center",
          }}
        >
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Field placeholder="Contact Number" keyboardType={"numeric"} />
          <View
            style={{
              alignItems: "center",
              width: "75%",
              paddingRight: 16,
            }}
          >
            <Text style={{ color: white, fontSize: 16, fontWeight:"bold" }}>
              By signing in you agree to our {' '}
            </Text>
            <Text
              style={{ color: white, fontWeight: "bold", fontSize: 16 }}
            >
              Terms & conditions
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              width: "75%",
              paddingRight: 16,
              marginBottom: 30,
            }}
          >
            <Text style={{ color: white, fontSize: 16 }}>
              and{" "}
            </Text>
            <Text
              style={{ color: white, fontWeight: "bold", fontSize: 16 }}
            >
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="SignUp"
            Press={() => {
              alert("Account created");
              props.navigation.navigate("Login");
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
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: black, fontWeight: "bold", fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  )
}

export default SignUp;
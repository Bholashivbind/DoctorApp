// Home.js
import React from 'react';
import Background from './Background';
import { View, StyleSheet, Text } from 'react-native';
import { black, darkGreen, green } from './Constants';
import Btn from './Btn';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}  >
        <Text style={{ color: 'black', fontSize: 64 }}>Let's start </Text>
        <Text style={{ color: 'black', fontSize: 64, marginBottom:40 }}>Search Our Doctors</Text>
        <Btn bgColor={green} textColor={black} btnLabel="Login" Press={()=> props.navigation.navigate("Login") } />
        <Btn bgColor={green} textColor = {black} btnLabel="SignUp" Press={() => props.navigation.navigate("SignUp")} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Home;

import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../Background'


const DoctorImage=require('./th.jpeg')
const BookingScreenFour = () => {
  return (
    <Background>
        <View style={styles.container}>
          <Text style={styles.title}>Booking Confirmation</Text>
          <View style={{ flex: 0, marginTop: 20 }}>
            <View style={styles.img}>
              <Image source={DoctorImage} style={{ width: 70, height: 70 }} />
              <Text>Dr. Lavangi</Text>
            </View>
            <View style={[ styles.qualification]}>
              <Text >Gynecologist</Text>
              <Text>15 yrs. o</Text>
              <Text>Gold Medalist</Text>
            </View>
          
            <View style={{paddingLeft:40}}>
                <View style={{paddingRight:20, marginTop:60}}>
                    <Text>Your Appointment with Dr. Lavangi has been confirmed. Your token number is #14 and your consulting time is 10:15 AM. Request  you to report 15 minutes earlier. Thank You </Text>
                </View>
                <View style={{paddingRight:20, marginTop:60, marginBottom:60}}> 
                    <Text>Add patient details to make it make your consulting effective</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                  <View style={[styles.boxA, {marginRight:10}]}>
                      <Text >Add patient details</Text>
                  </View> 
                  <View style={styles.boxA}>
                      <Text >Add to my calendar</Text>
                  </View> 
                </View>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate("BookingScreenFive")}>
                <View style={styles.btn}>
                <Button title="View My Appointment" />
                </View>

            </TouchableOpacity>
          </View>
        </View>  
    </Background>
  )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    title: {
      alignItems: "center",
      fontSize: 25,
      fontWeight:'bold',
      paddingLeft: 40,
      paddingTop:30,
      marginBottom:10
    },
    img: {
      alignItems: "flex-start",
      paddingLeft: 50,
      
    },
    qualification: {
      marginTop: -70,
      alignItems: "flex-end",
      paddingRight: 50,
    },
    btn: {
      marginTop: 20,
      
      color: "#fff",
      width:'95%',
      justifyContent:'center',
      paddingLeft:100,
      padding:100,
      
      
    },
    boxA:{
      borderColor: 'black',
      borderWidth: 3,
      borderTopWidth: 8,
      borderRightWidth: 4,
      borderBottomWidth: 8,
      borderLeftWidth: 4,
      padding:10,
      
    }
  });

export default BookingScreenFour
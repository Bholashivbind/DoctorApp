import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'
import Background from '../../Background'

const DoctorImage = require("./th.jpeg")
const BookingScreenTwo = () => {
  return (
    <Background>
         <View style={styles.container}>
          <Text style={styles.title}>Booking Screen 2.a</Text>
          <View style={{ flex: 0, marginTop: 20 }}>
            <View style={styles.img}>
              <Image source={DoctorImage} style={{ width: 70, height: 70 }} />
              <Text style={{fontWeight:'bold'}} >Dr. Lavangi</Text>
            </View>
            <View style={[ styles.qualification]}>
              <Text style={{fontWeight:'bold'}}>Gynecologist</Text>
              <Text style={{fontWeight:'bold'}}>15 yrs. old</Text>
              <Text style={{fontWeight:'bold'}}>Gold Medalist</Text>
            </View>
          </View>
          <Text style={ styles.title}>
            Choose Time
          </Text>
          <View>
            <View style={{paddingLeft:40,flexDirection:'row'}}>
                <View style={{paddingRight:20, marginTop:20}}>
                    <Text style={{fontWeight:'bold'}}>Next Available slot </Text>
                </View>
                <View style={styles.boxA}>
                    <Text  style={{fontWeight:'bold'}}>Conform Time Later</Text>
                </View> 
            </View>
            <Text style={ styles.title}>
            Morning
            </Text>
            <View style={{paddingLeft:40}} >
                <View>
                    <Text style={{fontWeight:'bold'}}>10:00 AM - 11:00 AM </Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>11:00 AM - 12:00 PM</Text>
                </View> 
            </View>
            <Text style={ styles.title}>
            Evening
            </Text>
            <View style={{paddingLeft:40}}>
                <View>
                    <Text style={{fontWeight:'bold'}}>06:00 AM - 07:00 PM </Text>
                </View>
                <View>
                    <Text style={{fontWeight:'bold'}}>07:00 AM - 08:00 PM</Text>
                </View> 
            </View>
            <View style={styles.btn}>
              <Button title="Book Appointment" />
            </View>
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
      paddingLeft: 40,
      paddingTop:30,
      marginBottom:10,
      fontWeight: 'bold'
    },
    img: {
      alignItems: "flex-start",
      paddingLeft: 50,
    },
    qualification: {
      marginTop: -70,
      alignItems: "flex-end",
    },
    btn: {
      marginTop: 20,
      color: "#fff",
      width:'95%',
      justifyContent:'center',
      paddingLeft:100,
      
      
      
    },
    boxA:{
      borderColor: 'black',
      borderWidth: 3,
      borderTopWidth: 8,
      borderRightWidth: 4,
      borderBottomWidth: 8,
      borderLeftWidth: 4,
      padding:10
    }
  });


export default BookingScreenTwo
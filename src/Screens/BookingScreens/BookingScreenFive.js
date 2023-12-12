import { View, Text, StyleSheet, Button, Image} from 'react-native'
import React from 'react'
import Background from '../../Background'

const DoctorImage =require('./th.jpeg')
const BookingScreenFive = () => {
  return (
    <Background>
        <View style={styles.container}>
          <Text style={styles.title}>Unable to book</Text>
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
          
            <View style={{paddingLeft:40, fontSize:60,}}>
                <View style={{paddingRight:20, marginTop:60}}>
                    <Text style={{fontSize:20}}>Sorry, appt slot/consulting time is over. Would you like to make appointment with the next available slot </Text>
                </View>
              
            </View>
            
            <View style={styles.btn}>
              <Button title="Yes" />
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
      width:'50%',
      justifyContent:'center',
      paddingLeft:40,
      padding:100,
      
      
    }
   
  });

export default BookingScreenFive
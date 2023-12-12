import { View, Text, StyleSheet,Button, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useState } from 'react';
import Background from '../../Background';
import DateTimePicker from '@react-native-community/datetimepicker';

const DoctorImage=require("./th.jpeg")
const BookingScreenThree = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Background>
        <View style={styles.container}>
          <Text style={styles.title}>Booking Screen 2.b</Text>
          <View style={{ flex: 0, marginTop: 20 }}>
            <View style={styles.img}>
              <Image source={DoctorImage} style={{ width: 70, height: 70 }} />
              <Text style={{fontWeight:'bold'}}>Dr. Lavangi</Text>
            </View>
            <View style={[ styles.qualification]}>
              <Text  style={{fontWeight:'bold'}}>Gynecologist</Text>
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
                
            </View>
            <Text style={ styles.title}>
            Morning
            </Text>
            <View style={styles.containerB}>
              <SafeAreaView>
                <Button onPress={showDatepicker} title="Show date picker!" />
                <Button onPress={showTimepicker} title="Show time picker!" />
                <Text>selected: {date.toLocaleString()}</Text>
                {show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    onChange={onChange}
                  />)}
                </SafeAreaView>
            </View>
            <TouchableOpacity >
            <View style={styles.btn}>
              <Button title="Book Appointment" />
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
      paddingLeft: 40,
      paddingTop:30,
      marginBottom:10
    },
    img: {
      alignItems: "flex-start",
      paddingLeft: 50,
    },
    qualification: {
      marginTop: -90,
      alignItems: "flex-end",
      paddingRight: 10,
      width:'140%'
    },
    btn: {
      marginTop: 60,
      color: "#fff",
      width:'100%',
      height:'30%',
      justifyContent:'center',
      paddingLeft:120,
      
      
    },
    boxA:{
      borderColor: 'black',
      borderWidth: 3,
      borderTopWidth: 8,
      borderRightWidth: 4,
      borderBottomWidth: 8,
      borderLeftWidth: 4,
      padding:10
    },
    appContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    containerB:{
      flex:1,
      width:'140%',
      alignItems:'center',
      justifyContent:'center',
    }
  });


export default BookingScreenThree
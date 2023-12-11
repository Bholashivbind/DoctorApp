import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import Background from '../../Background';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DoctorImage= require("./th.jpeg")
const BookingScreenOne = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[currentValue, setCurrentValue] = useState();
  const items = [
    {label:'Regular', value:'Regular'},
    {label:'Online', value:'Online'}
  ]
  return (
    <Background>
        <View style={styles.container} >
          <Text style={styles.title}>Booking Screen 1</Text>
          <View style={{ flex: 0, marginTop: 20 }}>
            <View style={styles.img}>
              <Image source={DoctorImage} style={{ width: 90, height: 70 }} />
              <Text style={styles.titleB}>Dr. Lavangi</Text>
            </View>
            <View style={[styles.box, styles.qualification,]}>
              <Text style={styles.titleB}>Gynecologist</Text>
              <Text style={styles.titleB}>15 yrs. o</Text>
              <Text style={styles.titleB}>Gold Medalist</Text>
            </View>
          </View>
          <Text style={ styles.title}>
            Choose Date
          </Text>
          <View>
            <View style={{paddingLeft:40,paddingTop:20} }>
                <View>
                    <Text style={styles.titleB}>Today </Text>
                </View>
                <View>
                    <Text style={styles.titleB}>Tommarrow</Text>
                </View>
                <View>
                <Text style={styles.titleB}>Next Available Day</Text>
                </View>
                <View>
                <Text style={styles.titleB}>Next Available Week</Text>
                </View>
            </View>
            <View style={{flexDirection:"row", paddingLeft:40, paddingTop:20, marginBottom:10}}>
                <View>
                    <Text style={styles.titleB}>
                         1st oct { } { } { } { } { }
                    </Text>
                </View>
                <View>
                <Text style={styles.titleB}>
                        2nd oct { } { } { } { } { }
                    </Text>
                </View>
                <View>
                <Text style={styles.titleB}>
                        3rd oct{ } { } { } { } { }
                    </Text>
                </View>
            </View>
            <View style={{marginBottom:60, width:'50%', justifyContent:'center', paddingLeft:40}}>
                <DropDownPicker items={items} open={isOpen} setOpen={()=> setIsOpen(!isOpen)} value={currentValue} />
                    
                
            </View>
          </View>
          <View>
            
            
            <TouchableOpacity  onPress={() => props.navigation.navigate("BookingScreenTwo")}>
              <View style={styles.btn}>
                <Button title="Book Appointment" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </Background>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        paddingTop: 30,
      },
      title: {
        alignItems: "center",
        fontSize: 40,
        paddingLeft: 40,
        paddingTop:70, 
        fontWeight: 'bold'
      },
      img: {
        alignItems: "flex-start",
        paddingLeft: 40,
        paddingTop:0
      },
      qualification: {
        marginTop: -80,
        alignItems: "flex-end",
        paddingRight: 0,
        fontSize:14,
        fontWeight:'bold',
        
      },
      btn: {
        marginTop: 40,
        width:'70%',
        justifyContent:'center',
        paddingLeft:100,
        
        
      },
      titleB:{
        fontWeight:'bold',
        fontSize:15
      }
    });


export default BookingScreenOne
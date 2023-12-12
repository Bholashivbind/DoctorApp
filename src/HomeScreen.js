import { View, Text, Image, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';


const  BackImage = require("../src/assets/docBackground.jpg")
const HomeScreen = (props) => {
  return (
        <ImageBackground
            source={BackImage} style= {{flex:1, resizeMode:'cover', justifyContent:'center'}}>
                <ScrollView >
            
            
                    <View style={{flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between", padding:10}}>
                        <View style={{ alignItems: 'center', width: 400 }}>
                            <Text style={{ color: 'black', fontSize: 49, marginTop: 35, fontWeight: 'bold', marginBottom:40 }}>
                                Search Doctors
                            </Text>
                        </View>
                        <TouchableOpacity 
                            onPress={() => props.navigation.navigate("BookingScreenOne")}>
                            <View style={{width:"30%", marginBottom:10}}>
                                <Image source={require('../src/Screens/BookingScreens/th.jpeg')}
                                style={{height:120, width: 120}} />
                                <Text style={{fontWeight:"bold",width:100, textAlign:"center"}}>
                                    Dr. Lawangi
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Elango
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Kumar 
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Lawangi
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Elango
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Kumar
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Lawangi
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Elango
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Kumar
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Lawangi
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Elango
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Kumar
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Lawangi
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Elango
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Kumar
                            </Text>
                        </View>
                        <View style={{width:"30%", marginBottom:10}}>
                            <Image source={require('./assets/imag.png')}
                            style={{height:120, width: 120}} />
                            <Text style={{fontWeight:"bold", textAlign:"center"}}>
                                Dr. Lawangi
                            </Text>
                        </View>
                        
                    </View>
                </ScrollView>
        </ImageBackground>
  );
};

export default HomeScreen;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import SignUp from './src/SignUp';
import HomeScreen from './src/HomeScreen';
import BookingScreenOne from './src/Screens/BookingScreens/BookingScreenOne';
import BookingScreenTwo from './src/Screens/BookingScreens/BookingScreenTwo';
import BookingScreenThree from './src/Screens/BookingScreens/BookingScreenThree';
import BookingScreenFive from './src/Screens/BookingScreens/BookingScreenFive';
import BookingScreenFour from './src/Screens/BookingScreens/BookingScreenFour';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
       
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BookingScreenOne" component={BookingScreenOne} />
        <Stack.Screen name="BookingScreenTwo" component={BookingScreenTwo} />
        <Stack.Screen name="BookingScreenThree" component={BookingScreenThree} />
        <Stack.Screen name="BookingScreenFour" component={BookingScreenFour} />
        <Stack.Screen name="BookingScreenFive" component={BookingScreenFive} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
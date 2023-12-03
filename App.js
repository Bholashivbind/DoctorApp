import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import SignUp from './src/SignUp';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} /> 
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
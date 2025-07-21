import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomScreen from '../screens/BottomSheetScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ImageScreen from '../screens/ImagePickerScreen';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='ImageScreen'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Map" component={MapScreen} /> */}
      <Stack.Screen name="ImageScreen" component={ImageScreen} />
      <Stack.Screen name="BottomScreen" component={BottomScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;


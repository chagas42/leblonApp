import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 
import SplashScreen from '../Screens/SplashScreen'; 
import Started from '../Screens/Started';
import Login from '../Screens/Login';
import HomeTab from './HomeTab'; 

const Stack = createStackNavigator(); 

export default () => (
    <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
            headerShown:false
        }}
    >
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='Started' component={Started}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='HomeTab' component={HomeTab}/>
    </Stack.Navigator>
); 
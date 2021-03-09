import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs' ;
import HomeStack from './HomeStack'; 
import Profile from '../Screens/Perfil'; 
import Options from '../Screens/Options'; 
import CustomTabBar from '../Components/CustomTabBar'; 


const Tab = createBottomTabNavigator(); 

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props}/>} initialRouteName="HomeStack">
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="HomeStack" component={HomeStack} options={{
            title:'Escala de Trabalho',
        }} />
        <Tab.Screen name="Options" component={Options} />
    </Tab.Navigator>
); 

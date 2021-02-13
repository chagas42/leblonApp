import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from '../Screens/Home'; 
import Options from '../Screens/Options'; 
import NotifyIcon from '../Assets/icons/notifyIcon.svg'; 
import MenuIcon from '../Assets/icons/menuIcon.svg'; 



const HomeStack = createStackNavigator(); 

export default () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} options={{
            title:'Escala de Trabalho',
            headerTintColor:'#003366',
            headerTitleAlign:'center',
            headerLeft:()=> <NotifyIcon width={25} height={25}/>,
            headerRight:()=> <MenuIcon width={25} height={25}/>,
            headerLeftContainerStyle:{
                marginLeft:10
            },
            headerRightContainerStyle:{
                marginRight:10
            }


        }} />
        <HomeStack.Screen name='Options' component={Options} />
    </HomeStack.Navigator>
); 



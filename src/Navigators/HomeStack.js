import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from '../Screens/Home'; 
import Options from '../Screens/Options'; 
import NotifyIcon from '../Assets/icons/notifyIcon.svg'; 
import MenuIcon from '../Assets/icons/menuIcon.svg'; 
import { TouchableOpacity } from 'react-native';



const HomeStack = createStackNavigator(); 

const MenuIconArea = ( props ) => {
    

    return(
        <TouchableOpacity onPress={props.onPress}>
            <MenuIcon width={25} height={25}/>
        </TouchableOpacity>
    ); 
}; 

export default ( props ) => {

    return(
        <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={Home} options={{
            title:'Escala de Trabalho',
            headerTintColor:'#003366',
            headerTitleAlign:'center',
            headerLeft:()=> <NotifyIcon width={25} height={25}/>,
            headerRight:()=> <MenuIconArea onPress={()=>{props.navigation.toggleDrawer()}}/>,
            headerLeftContainerStyle:{
                marginLeft:10
            },
            headerRightContainerStyle:{
                marginRight:10
            }


        }} />
        <HomeStack.Screen name='Options' component={Options} />
    </HomeStack.Navigator>
    )
    
}; 



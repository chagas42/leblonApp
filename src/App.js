import 'react-native-gesture-handler'; 
import React from 'react'; 
import { Provider } from 'react-redux'; 
import Store from './Store'
import { NavigationContainer } from '@react-navigation/native'; 
import MainStack from './Navigators/MainStack';


export default () => {
    return (
        <Provider store={Store} >
            <NavigationContainer>
                <MainStack/>
            </NavigationContainer>
        </Provider>
    );
}; 
import React, {useEffect} from 'react'; 
import { ContainerView, LoadIcon } from './style'; 
import Logo from '../../Assets/images/layer11.svg';

const Splash = ( props ) => {

    useEffect(()=>{
        setTimeout(()=>{
            props.navigation.navigate('Started'); 
        }, 100); 
    }, [])

    return(
        <ContainerView>
            <Logo width={150} height={150} color="#fff"/>   
            <LoadIcon size="large" color="#fff" />
        </ContainerView>
    ); 
}; 

export default Splash; 

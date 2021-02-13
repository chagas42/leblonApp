import React from 'react'; 
import styled from 'styled-components/native'; 


const Button = ( props ) => {

    return(
        <ToucheButton 
            style={{backgroundColor:props.color}}
            onPress={props.onPress}
            underlayColor={1}
        >
            <TextButton style={{color:props.textColor}} >{props.value}</TextButton>
        </ToucheButton>
    ); 
}; 

const ToucheButton = styled.TouchableOpacity`
    width:100%; 
    justify-content:center;
    align-items:center; 
    margin-top:20px;
    padding:10px; 
    border-radius:15px; 
    elevation:25;
    
`; 

const TextButton = styled.Text`
    font-size:18px;
    font-weight:bold; 
`; 



export default Button; 
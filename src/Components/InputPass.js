import React, { useState } from 'react'; 
import styled from 'styled-components/native'; 
import LockIcon from '../Assets/icons/lockIcon.svg'; 
import PassIcon from '../Assets/icons/view.svg'; 
import PassIconTwo from '../Assets/icons/hide.svg'; 

const InputPass = ( props ) => {

    const [typePass, setTypePass] = useState(true); 

    return(
        <InputArea>
            <LockIcon/>
            <InputContent 
                placeholder="Password" 
                secureTextEntry={typePass}
                value={props.value}
                onChangeText={props.onChangeText}
            />
            <ViewPass onPress={()=>setTypePass(!typePass)} >
                {typePass == true &&
                <PassIcon width={20} height={20} />
                }
                {typePass == false &&
                <PassIconTwo width={20} height={17} />
                }
            </ViewPass>

        </InputArea>
    ); 
}; 

const InputArea = styled.View`
    padding-left:20px; 
    padding-right:10px; 
    padding-top:4px; 
    padding-bottom:4px;
    background-color:#fff; 
    justify-content:center;
    align-items:center; 
    flex-direction:row;
    border-radius:10px; 
    margin-bottom:5px;
`; 

const InputContent = styled.TextInput`
    flex:1; 
    margin-left:10px;
    font-size:18px; 
`; 

const ViewPass = styled.TouchableOpacity`
    margin-right:10px;
`; 

export default InputPass;
import React from 'react';
import styled from 'styled-components/native'; 

export const ContainerView = styled.KeyboardAvoidingView`
    flex:1;
    background-color:#B3D8FB;
   
`; 

export const LogoArea = styled.View`
    flex:1; 
    justify-content:center;
    align-items:center;
    z-index:0; 
    /* background-color:red;  */
    margin-top:25px;
`;
export const InputArea = styled.View`
    flex:3; 
    padding:25px;
    z-index:2;
    /* background-color:green;   */
`; 
export const ImageArea = styled.View`
    flex:3; 
    justify-content:flex-end;
    align-items:center;
    z-index:0; 
    /* background-color:blue; */
`;  

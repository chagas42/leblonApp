import React from 'react';
import styled from 'styled-components/native'; 


export const Container = styled.View`
    flex:1; 
    background-color:#ddd;
`; 

export const LogoArea = styled.View`
    flex:1; 
    justify-content:flex-start;
    align-items:center;
    margin-top:15px;
`; 

export const ImageArea = styled.View`
    flex:3; 
    justify-content:flex-end;
    align-items:center;
`;

export const ButtonArea = styled.View`
    flex:1; 
    background-color:#fff;
    margin-left:2px; 
    margin-right:2px; 
    border-top-left-radius:25px;
    border-top-right-radius:25px;
    justify-content:center; 
    align-items:center; 
    padding:25px;
`; 

import React, { useState, useEffect, useRef } from 'react'; 
import styled from 'styled-components/native'; 


const days = [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ];


const HomeDaysScroll = ( props ) => {
   

    const [selectedDay, setSelectedDay] = useState(props.selectedDay); 

    useEffect(() => {
        props.setSelectedDay(selectedDay)
    }, [selectedDay])

    return (
        <WeekDaysArea>
            {days.map((d, k)=>(
                <WeekDays key={k} underlayColor="transparent" onPress={()=>setSelectedDay(k)} style={ k == selectedDay?{
                    backgroundColor:'#ddd'
                }:{}} >
                    <WeekDaysText style={k==selectedDay?{
                        color:'#003366'
                    }:{
                        color:'grey'
                    }}>{d}</WeekDaysText>
                </WeekDays>
            ))}
        </WeekDaysArea>
    ); 
}; 

const WeekDaysArea = styled.View`
    width:100%;
    background-color:white;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    padding-top:10px;
    padding-bottom:5px;   
    margin-bottom:16px;
`;
const WeekDays = styled.TouchableHighlight`
    flex:1;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    height:30px; 
    width:100%;
    padding:5px;
    margin-left:5px; 
    margin-right:5px;
`; 
const WeekDaysText = styled.Text`
    font-size:13px; 
    color:grey; 
`; 

export default HomeDaysScroll; 
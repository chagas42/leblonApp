import React, { useState, useEffect } from 'react'; 
import { Dimensions, StyleSheet } from 'react-native'; 
import styled from 'styled-components/native'; 
import Escala from './Schedule'; 
import ParkerIcon from '../Assets/icons/parkerIcon.svg'; 
import TicketIcon from '../Assets/icons/ticketIcon.svg'; 
import DayOff from '../Assets/images/DreamerBro.svg'; 
// import { ContainerView } from '../Screens/Login/style';

const windowWidth = Dimensions.get('window').width - 10;
const windowHeight = Dimensions.get('window').height; 
console.log(windowWidth); 

const HomeSchedule = (props) => {
    
    const [selectedDay, setSelectedDay] = useState(props.selectedDay); 

    useEffect(()=>{
        props.setSelectedDay(selectedDay);
        console.log(selectedDay); 
    }, [selectedDay])

    return(
        <ScheduleContainer>
            {Escala[props.selectedDay].picks.map((e,i)=>{
            return( 
                <ScrollContainer 
                    key={i}
                    horizontal={true}
                    contentContainerStyle={{flex:1, alignItems:'center'}}
                >
                    <ScheduleArea>
                        {e.LineName === 0 &&
                            <DayOff style={{marginTop:90, marginLeft:15}} />
                        }
                        {e.LineName !== 0 &&
                        <>  
                            <LineTitleArea>
                                <TitleSchedule>{e.LineName}</TitleSchedule>
                                <NumberSchedule>{e.Line}</NumberSchedule>
                            </LineTitleArea>

                            <LineInfoArea>
                                <LineInfoContainer>
                                    <LineInfoStart>INICIO: {e.Started}</LineInfoStart>
                                    <LineInfoEnd>FIM: {e.End}</LineInfoEnd>
                                </LineInfoContainer>
                                <LineInfoLocation>
                                    {e.Location === 0 &&
                                        <ParkerIcon width={50} height={50} />
                                    }
                                    {e.Location === 1 &&
                                    <TicketIcon width={45} height={45}/>
                                    }
                                </LineInfoLocation>
                            </LineInfoArea>
                        </>  
                        } 
                        </ScheduleArea>
                </ScrollContainer>
                )})}     
        </ScheduleContainer>
    ); 
}; 

const ScheduleContainer = styled.View`
    flex:1; 
    align-items:center;
    padding:20px;
`; 
const ScheduleArea = styled.View`
    flex-direction:column; 
    flex:1;
    width:${windowWidth.toFixed(0)}px;
    height:300px;
    padding:15px;
    margin-bottom:10px;
    /* background-color:red; */
`;
const ScrollContainer = styled.ScrollView``; 

const LineTitleArea = styled.View`
    flex:1;
    flex-direction:column; 
    align-items:center;
    align-self:center;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    width:100%;
    background-color:white;
    elevation:15;
    padding-top:25px; 
    background-color:#003366;
`;
const LineInfoArea = styled.View`
    flex:1;
    background-color:#fff;
    padding:8px;
    flex-direction:row; 
    elevation:15;
    padding-bottom:25px; 
    border-bottom-left-radius:10px; 
    border-bottom-right-radius:10px;
    /* background-color:#0044ff;  */
`; 
const TitleSchedule = styled.Text`
    font-size:22px;
    flex:1;
    margin-top:5px;
    color:#fff;
    font-weight:bold; 
`; 
const NumberSchedule = styled.Text`
    font-size:42px;
    flex:2;
    color:#fff; 
    font-weight:bold; 
`; 

const LineInfoContainer = styled.View`
    flex:2;
    justify-content:space-around;
    align-items:center;
`; 
const LineInfoLocation = styled.View`
    flex:1;
    align-content:center;
    margin-top:25px;
    margin-left:20px;
`; 
const LineInfoStart = styled.Text`
    font-size:16px;
`; 
const LineInfoEnd = styled.Text`
    font-size:16px;
`; 


export default HomeSchedule; 
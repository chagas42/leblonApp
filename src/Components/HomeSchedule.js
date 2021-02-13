import React from 'react'; 
import styled from 'styled-components/native'; 
import Escala from '../Contexts/Schedule'; 
import ParkerIcon from '../Assets/icons/parkerIcon.svg'; 
import TicketIcon from '../Assets/icons/ticketIcon.svg'; 
import DayOff from '../Assets/images/DreamerBro.svg'; 


const HomeSchedule = (props) => {
    
    return(
        <ScheduleContainer
            contentContainerStyle={{
                flex:1,
                alignItems:'center'
            }}
        >
            
            {Escala[props.selectedDay].picks.map((e,i)=>{
               return(
                    <ScheduleArea key={i}>
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
            )})}
               
                
        </ScheduleContainer>
    ); 
}; 

const ScheduleContainer = styled.ScrollView``; 
const ScheduleArea = styled.View`
    background-color:transparent;
    flex-direction:row; 
    width:350px; 
    height:100px;
    border-radius:30px;
    margin-top:25px;
`; 
const LineTitleArea = styled.View`
    flex:1; 
    justify-content:space-between;
    align-items:center;
    background-color:rgba(0, 51, 102, 0.9);
    flex-direction:column; 
    margin-right:08px;
    border-radius:8px;
    elevation:15;
`;
const TitleSchedule = styled.Text`
    font-size:15px;
    flex:1;
    margin-top:5px;
    color:#fff;
    font-weight:bold; 
`; 
const NumberSchedule = styled.Text`
    font-size:22px;
    flex:2;
    color:#fff; 
    font-weight:bold; 

`; 

const LineInfoArea = styled.View`
    flex:2;
    background-color:#fff;
    border-radius:8px;
    padding:8px;
    flex-direction:row; 
    elevation:15;
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
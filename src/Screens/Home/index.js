import React, {useState, useEffect} from 'react'; 
import { ContainerView, HomeScheduleContainer } from './style'
import HomeDaysScroll from '../../Components/HomeDaysScroll';
import HomeSchedule from '../../Components/HomeSchedule'; 

const Home = ( props ) => {
    
    const date = new Date(); 
    const [selectedDay, setSelectedDay] = useState(date.getDay());  

    return(
        <ContainerView>                    
            <HomeDaysScroll
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
            /> 
            <HomeScheduleContainer>    
                <HomeSchedule
                    selectedDay={selectedDay}
                    setSelectedDay={setSelectedDay}
                />         
            </HomeScheduleContainer>
        </ContainerView>
    ); 
}; 

export default Home; 

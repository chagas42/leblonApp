import React from 'react'; 
import styled from 'styled-components/native'; 
import ProfileIcon from '../Assets/icons/profileIcon2.svg'; 
import ScheduleIcon from '../Assets/icons/scheduleIcon3.svg'; 
import ConfigIcon from '../Assets/icons/configIcon2.svg'; 

const CustomTabBar = ({ state, navigation }) => {
    
    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }; 

    return(
       <TabArea>
           
           <TabItem onPress={()=>{goTo('Profile')}}>
                <ProfileIcon style={{opacity: state.index===0?1:0.7, marginTop: state.index===0?-10:0}} width="27" height="27"/>
           </TabItem>
           
           <TabItem onPress={()=>{goTo('HomeStack')}}>
                <ScheduleIcon  style={{opacity: state.index===1?1:0.7, marginTop: state.index===1?-10:0}} width="27" height="27"/>
           </TabItem>

           <TabItem onPress={()=>{goTo('Options')}}>
                <ConfigIcon style={{opacity: state.index===2?1:0.7, marginTop: state.index===2?-10:0}} width="27" height="27"/>
           </TabItem>

       </TabArea> 
    ); 
}; 

const TabArea = styled.View`
    height:60px; 
    background-color:#003366; 
    flex-direction:row; 
`; 

const TabItem = styled.TouchableOpacity`
    flex:1; 
    justify-content:center;
    align-items:center;
`; 

const TabItemCenter = styled.TouchableOpacity`
    width:80px; 
    height:80px; 
    justify-content:center;
    align-items:center;
    background-color:#fff; 
    border-radius:40px;
    border:5px solid #ddd;
    margin-top:-40px;
`; 

export default CustomTabBar; 
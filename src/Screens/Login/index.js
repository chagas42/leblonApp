import React, {useState} from 'react'; 
import { ContainerView, LogoArea, ImageArea, InputArea } from './style'; 
import BusLogo from '../../Assets/images/BusStop2.svg'; 
import LoginLogo from '../../Assets/images/loginLogo2.svg'; 
import InputId from '../../Components/InputId';
import InputPass from '../../Components/InputPass'; 
import Button from '../../Components/Button'; 

const Login = ( props ) => {

    const [id, setId] = useState(''); 
    const [passWord, setPassWord] = useState('');  

    const handleLogin = () => {
       if(id != '' && passWord != ''){
            if(id === '22383' && passWord === '141019'){
               props.navigation.reset({
                   index:0,
                   routes:[{name:'HomeTab'}],
               });
           } else {
            
           console.log('errou')

           }

       } else {
           
        console.log('errou')

       }; 

    }; 

    return(
       <ContainerView>
            <LogoArea>
                <LoginLogo/>
            </LogoArea>
            <InputArea>
                <InputId
                    value={id}
                    onChangeText={(t)=>{setId(t)}}
                />
                <InputPass
                    value={passWord}
                    onChangeText={(t)=>{setPassWord(t)}}
                />
                <Button
                    value="Login"
                    color="#003366"
                    textColor="#fff"
                    onPress={handleLogin}
                />
            </InputArea>
            <ImageArea>
                 <BusLogo style={{zIndex:-1}}/>
            </ImageArea> 
       </ContainerView>     
    ); 
}; 


export default Login; 


 
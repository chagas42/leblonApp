import React, {useState} from 'react'; 
import { connect } from 'react-redux'; 
import { ContainerView, LogoArea, ImageArea, InputArea } from './style'; 
import { Text } from 'react-native';  
import BusLogo from '../../Assets/images/BusStop2.svg'; 
import LoginLogo from '../../Assets/images/loginLogo2.svg'; 
// import-area:
import InputId from '../../Components/InputId';
import InputPass from '../../Components/InputPass'; 
import Button from '../../Components/Button'; 

const Login = ( props ) => {
    
    // state-area:
    const [ id, setId ] = useState(''); 
    const [ passWord, setPassWord ] = useState('');  
    const [ error, setError ] = useState(false); 
    const [ errorMessage, setErrorMessage ] = useState(''); 
    
    console.log(props.id)
    console.log(props.password)


    const handleLogin = () => {
       if(id != '' && passWord != ''){
            if(id == props.id && passWord == props.password){
               props.navigation.reset({
                   index:0,
                   routes:[{name:'Drawer'}],
               });
               setError(false); 
               props.setLog(true);
           } else {
               setErrorMessage('ID ou Senha inválidos!'); 
               setError(true); 
           }
       } else {  
        setErrorMessage('O campo não pode estar vazio!');
        setError(true); 
       }; 

    }; 

    //render-area:
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
                {error == true &&
                    <Text style={{color:'red', fontSize:16, fontWeight:'bold', marginLeft:15, marginTop:5}} >{errorMessage}</Text>
                }
                <InputPass
                    value={passWord}
                    onChangeText={(t)=>{setPassWord(t)}}
                />
                {error == true &&
                    <Text style={{color:'red', fontSize:16, fontWeight:'bold', marginLeft:15, marginTop:5}} >{errorMessage}</Text>
                }
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

// redux-area:
const mapStateToProp = ( state ) => {
    return{
        id:state.userReducer.id, 
        password:state.userReducer.password
    }; 
}; 
const mapDispatchToProp = ( dispatch ) => {
    return{
        setLog:(stateLog) => dispatch({type:'SET_LOG', payload:{isLog:stateLog}})
    }
}; 

export default connect( mapStateToProp, mapDispatchToProp )(Login); 


 
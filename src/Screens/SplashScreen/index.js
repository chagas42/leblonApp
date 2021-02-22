import React, {useEffect} from 'react'; 
import { connect } from 'react-redux'; 
import { ContainerView, LoadIcon } from './style'; 
import Logo from '../../Assets/images/layer11.svg';

const Splash = ( props ) => {

    useEffect(()=>{
        setTimeout(()=>{
            
            if(props.isLogged){
                props.navigation.navigate({"name":"HomeTab"}); 
            } else {
                props.navigation.navigate({"name":"Login"});
            }

        }, 150); 
    }, [])

    return(
        <ContainerView>
            <Logo width={100} height={100} color="#fff"/>   
            <LoadIcon size='small' color="#fff" />
        </ContainerView>
    ); 
}; 

const mapStateToProps = ( state ) => {
    return {
        isLogged:state.userReducer.isLog
    }; 
}; 

const masDispatchtoProps = ( state ) => {
    return {}; 
}; 


export default connect( mapStateToProps, masDispatchtoProps )(Splash); 

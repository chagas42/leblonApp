import React, {useEffect} from 'react'; 
import { connect } from 'react-redux'; 
import { ContainerView, LoadIcon } from './style'; 
import Logo from '../../Assets/images/layer11.svg';

const Splash = ( props ) => {


    useEffect(()=>{

            if(props.isLogged){
                props.navigation.reset({
                    index:0, 
                    routes:[{name:'Drawer'}],
                }); 
            } else {
                props.navigation.reset({
                    index:0, 
                    routes:[{name:'Login'}],
                })
            }
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

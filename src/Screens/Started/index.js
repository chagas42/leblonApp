import React from 'react'; 
import { Container, LogoArea, ImageArea, ButtonArea } from './style'; 
import TimeLogo from '../../Assets/images/TimeLogo.svg'; 
import TextLogo from '../../Assets/images/TextLogo.svg'; 
import Button from '../../Components/Button'; 
import { Dimensions } from 'react-native'; 

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height; 

const Started = (props) => {
    
    const handleButton = () => {
        
        props.navigation.reset({
            index:0,
            routes:[{name:'Login'}],
        });
        
    }

    return(
        <Container>
            <LogoArea>
                <TextLogo  width={windowWidth/2} />
            </LogoArea>

            <ImageArea>
                <TimeLogo height={windowHeight/2}/>
            </ImageArea>

            <ButtonArea>
                <Button 
                    value="Cadastrar" 
                    color='#fff' 
                    textColor="#003366"
                    
                />
                <Button 
                    value="Login" 
                    color='#003366'
                    textColor="#fff"
                    onPress={handleButton}
                />
            </ButtonArea>
            
        </Container>
    ); 
}; 


export default Started; 

const initialState = {
    id:22383, 
    password:141019, 
    isLog:false
}; 

export default ( state = initialState, action ) => {
    
    switch(action.type){
        case 'SET_ID':
            return {...state, id:action.payload.name}; 
            break; 
        case 'SET_PASS':
            return {...state, password:action.payload.email}; 
            break; 
        case 'SET_LOG':
            return {...state, isLog:true};  
            break; 
    }

    return state
}; 
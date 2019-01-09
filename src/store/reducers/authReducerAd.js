const initState = {
    authReducesAd:null
}
const authReducesAd =( state = initState,action )=>{
    switch(action.type){
        case "Login_Error":
        console.log("Login_Error**authReduces**")
    return{
        ...state,
        authError:'Login_failed'
    }
    case "Login_SuccessFull":
        console.log("Login_SuccesFull**authReduces**")
    return{
        ...state,
        authError:null
    }
    
    case "LogOut_SuccessFull":
    console.log("LogOut_SuccesFull**authReduces**")
    return state;
    
    default:
    return state
    }
}

export default authReducesAd;
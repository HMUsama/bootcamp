const initState = {
    authReducesAd:null
}
const authReducesCp =( state = initState,action )=>{
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
        company:'company',
        ...state,
        authError:null,
    }

    case "LogOut_SuccessFull":
    console.log("LogOut_SuccesFull**authReduces**")
    return {
        company:false,
        state,
    }



    case 'SIGNUP_SUCCESS' :
    console.log('signup_successfull**authReduces**');
    return{
        company:'company',
        ...state,
        authError:null,
    }
    case 'SIGNUP_ERROR' :
        console.log('signup_Error**authReduces**');
    return{
        ...state,
        authError:action.err.message
    }
    default:
    return state
       
    }
}

export default authReducesCp;
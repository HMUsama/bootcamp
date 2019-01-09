const initState = {
    authReducesStd:null
}
const createResumeReducerStd =( state = initState,action )=>{
    switch(action.type){
     
        case "CREATE_DETAILS_SUCCESS":
            console.log("CREATE_DETAILS_SUCCESS**authReduces**")
        return{
            ...state,
            authError:null
        }
        case "CREATE_DETAILS_ERROR":
        console.log("CREATE_DETAILS_ERROR**authReduces**")
        return{
            ...state,
            authError:'Error_failed'
        }
        default:
        return state     
        }
}

export default createResumeReducerStd;
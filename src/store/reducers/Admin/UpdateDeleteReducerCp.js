const initState = {
    authReducesStd:null
}
const UpdateDeleteReducerCp =( state =initState, action )=>{
    switch(action.type){
     
        case "DETAILS_UPDATE_SUCCESSFUll":
            console.log("CREATE_DETAILS_SUCCESS**authReduces**",action)
        return{
            ...state,
            authError:null
        }
        case "DETAILS_UPDATE_ERROR":
        console.log("CREATE_DETAILS_ERROR**authReduces**")
        return{
            ...state,
            authError:'Error_failed'
        }

        case "DELETE_DETAILS_SUCCESSFUll":
        console.log("DELETE_DETAILS_SUCCESSFUll**authReduces**",action)
        return{
            ...state,
            authError:null
        }
        case "DELETE_DETAILS_ERROR":
        console.log("DELETE_DETAILS_ERROR**authReduces**")
        return{
            ...state,
            authError:'Error_failed'
        }
        default:
        return state     
        }
}

export default UpdateDeleteReducerCp;
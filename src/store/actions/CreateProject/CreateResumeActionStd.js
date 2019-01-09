
export const createResume = (studendDetails) =>{
    console.log("7777",studendDetails)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        debugger
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("StudentDetails").add({

            ...studendDetails,
            name:studendDetails.name,
            email:studendDetails.email,
            number:studendDetails.number,
            message:studendDetails.message,
            
        }).then(() => {
            dispatch({ type:'CREATE_DETAILS_SUCCESS',studendDetails })
        }).catch((err) => {
            dispatch({ type:'CREATE_DETAILS_ERROR',err });
        })
    }
};
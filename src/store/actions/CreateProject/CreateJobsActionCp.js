

export const createJobsCp = (jobsDetails) =>{
    console.log("7777",jobsDetails)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        debugger
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("companyJobs").add({

            ...jobsDetails,
            // name:studendDetails.name,
            // email:studendDetails.email,
            // number:studendDetails.number,
            // message:studendDetails.message,
            
        }).then(() => {
            dispatch({ type:'CREATE_DETAILS_SUCCESS',jobsDetails })
        }).catch((err) => {
            dispatch({ type:'CREATE_DETAILS_ERROR',err });
        })
    }
};
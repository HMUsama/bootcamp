

export const updateResumeStd = (ResumeUpdate) =>{
    console.log("ResumeUpdate",ResumeUpdate)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        // debugger
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("StudentDetails").doc(ResumeUpdate.uid).set({
            ...ResumeUpdate,
        }).then(() => {
            dispatch({ type:'DETAILS_UPDATE_SUCCESSFUll',ResumeUpdate })
        }).catch((err) => {
            dispatch({ type:'DETAILS_UPDATE_ERROR',err });
        })
    }
};
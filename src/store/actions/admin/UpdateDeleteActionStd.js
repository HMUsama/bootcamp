

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

export const deleteResumeStd = (deleteResume) =>{
    console.log("DDDDD",deleteResume)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        debugger
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("StudentDetails").doc(deleteResume).delete()
        .then(() => {
            dispatch({ type:'DELETE_STD_DETAILS_SUCCESSFUll',deleteResume })
        }).catch((err) => {
            dispatch({ type:'DELETE_STD_DETAILS_ERROR',err });
        })
    }
};
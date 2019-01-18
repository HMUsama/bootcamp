

export const updateJobCp = (updateJob) =>{
    console.log("7777",updateJob)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        // debugger
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("companyJobs").doc(updateJob.uid).set({
            ...updateJob,
        }).then(() => {
            dispatch({ type:'DETAILS_UPDATE_SUCCESSFUll',updateJob })
        }).catch((err) => {
            dispatch({ type:'DETAILS_UPDATE_ERROR',err });
        })
    }
};

export const deleteJobCp = (deleteJob) =>{
    console.log("DDDDD",deleteJob)
    return (dispatch,getState,{getFirebase, getFirestore }) => {
        debugger
        const firebase=getFirebase();
        const firestore = getFirestore();
        firestore.collection("companyJobs").doc(deleteJob).delete()
        .then(() => {
            dispatch({ type:'DELETE_DETAILS_SUCCESSFUll',deleteJob })
        }).catch((err) => {
            dispatch({ type:'DELETE_DETAILS_ERROR',err });
        })
    }
};
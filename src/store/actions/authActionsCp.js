export const companiesSignup = (newCampany) =>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase=getFirebase();
        const firestore=getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newCampany.email,
            newCampany.password
        ).then((res)=>{
            return firestore.collection("company").doc(res.user.uid).set({
                email    : newCampany.email,
                firstName: newCampany.firstName,
                lastName:  newCampany.lastName,
                // initails:  newCampany.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type:'SIGNUP_SUCCESS',newCampany})
        }).catch((err) => {
            dispatch({ type:'SIGNUP_ERROR',err });
        });
    }
}




export const companiesLogin = (credentails) =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();
        console.log("creadentail",credentails)
        firebase.auth().signInWithEmailAndPassword(
            credentails.email,
            credentails.password,
            // credentails.
        ).then(()=>{
            dispatch({type:'Login_SuccessFull',credentails});
        }).catch((err)=>{
            dispatch({type:'Login_Error',err});
        });
    }
}


export const signOutCp = () =>{
    return (dispatch,getState,{getFirebase})=>{
        const firebase=getFirebase();

        firebase.auth().signOut().then(()=>{
            console.log("LogOut_SuccesFull**Action**")
            dispatch({type:'LogOut_SuccessFull'});
        })
    }
}
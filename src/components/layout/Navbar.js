import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import StdSignedInLinks from './student/StdSignInLinks'
import StdSignedOutLinks from './student/StdSignOutLinks'
import CpSignedOutLinks from './campany/CpSignOutLinks'
import CpSignedInLinks from './campany/CpSignInLinks'
import AdSignedOutLinks from './admin/AdSignInLinks'
import AdSignedInLinks from './admin/AdSignOutLinks'



const Navbar = (props) =>{
    const { authStd,authCp,profile } = props;
    // console.log("companies",authStd)
    // console.log("student",authCp.dispalyName)

    const links= authStd.uid ?<StdSignedInLinks profile={profile}/>
                        :<StdSignedOutLinks/>


    // <CpSignedInLinks profile={profile}/>
    //                         :<CpSignedOutLinks/> 
    //                     &&
                        

    return(
        <nav className="nav-wrapper green darken-2">
        <Link to='/' className="brand-logo left">Campus </Link>
        {/* {authCp.dispalyName==undefined ? <CpSignedInLinks profile={profile}/>:null } */}
        {links}
        </nav>
    )
}

const mapStateToProps=(state)=>{

    // console.log(" state navbar 1 ***",state);
    return{
        authCp:    state.firebase.auth,
        authStd:    state.firebase.auth,
        authAd:    state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
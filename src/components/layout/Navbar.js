import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import StdSignedInLinks from './student/StdSignInLinks'
import StdSignedOutLinks from './student/StdSignOutLinks'
import CpSignedOutLinks from './campany/CpSignOutLinks'
import CpSignedInLinks from './campany/CpSignInLinks'
import AdSignedOutLinks from './admin/AdSignInLinks'
import AdSignedInLinks from './admin/AdSignOutLinks'
import authReducesCp from '../../store/reducers/authReducerCp';
import { link } from 'fs';



const Navbar = (props) =>{
    // debugger
    const { student,company,profile,authStd,authCp } = props;

    const link1= authStd.uid ? <StdSignedInLinks profile={profile}/>:<StdSignedOutLinks/>
    // null
    // const link2= company ? <StdSignedInLinks profile={profile}/>:null
    // <StdSignedOutLinks/>
    return(
        <nav className="nav-wrapper teal darken-2">
        {/* <Link to='/' className="brand-logo left">Campus </Link> */}
       {link1}
        </nav>
    )
}

const mapStateToProps=(state)=>{
    const student=student ? true :false
    const company=company ? true :false
    return{
        company  : state.authCp.company,
        student  : state.authStd.student,

        authCp:    state.firebase.auth,
        authStd:    state.firebase.auth,
        authAd:    state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);

// export default compose(connect(mapStateToProps),
//                 firestoreConnect ([
//                 {collection: "companyJobs"}
//                 ])
//                 )(Dashboard)
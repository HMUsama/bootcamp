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



const Navbar = (props) =>{
    const { student,company,profile } = props;
    // console.log("Props",props)
    // console.log("authCp",authCp)
    // console.log("profile",profile)
    // console.log("student Nav **",student)
    // console.log("company **",company)
    
    // const link1= company ? <CpSignedInLinks/>:<CpSignedOutLinks/>
    // const link1= company ? <CpSignedOutLinks/>:<CpSignedInLinks/>
    const link1= student  ? <StdSignedInLinks profile={profile}/>:<StdSignedOutLinks/>
    // const link2= company  ? <CpSignedOutLinks/>: <CpSignedInLinks/>
        // student == true ? <StdSignedInLinks profile={profile}/>:<CpSignedOutLinks/>
    return(
        <nav className="nav-wrapper green darken-2">
        {/* <Link to='/' className="brand-logo left">Campus </Link> */}
        {link1}
        {/* {link2} */}
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
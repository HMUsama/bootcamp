import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutStd} from '../../../store/actions/authActionsStd' 

const StdSignedInLinks = (props) => {
    // console.log("StdSignedInLinks",props)
    return(
     <ul className="right">
        <li><NavLink to='/student'>CreateResume</NavLink></li>
        <li><NavLink to='/'><a onClick={props.signOutStd}>LogOut </a></NavLink></li>
        <li><NavLink to='/' 
            className="btn btn-floating black lightten-1">
            {props.profile.initails}
            </NavLink>
        </li> 
     </ul>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        signOutStd: () =>dispatch(signOutStd())
    }
}

export default connect(null,mapDispatchToProps)(StdSignedInLinks);
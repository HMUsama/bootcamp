import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOutCp} from '../../../store/actions/authActionsCp'

const CpSignedInLinks = (props) => {
    // console.log("std",props)
    return(
     <ul className="right">

        <li><a onClick={props.signOutCp}>Log Out</a></li>
        
     </ul>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return {
        signOutCp: () =>dispatch(signOutCp())
    }
}

export default connect(null,mapDispatchToProps)(CpSignedInLinks);
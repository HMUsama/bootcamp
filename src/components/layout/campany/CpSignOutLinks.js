import React from 'react'
import { NavLink } from 'react-router-dom'

const CpSignedOutLinks = () => {
    return(
     <ul className="right">
         <div className="  right darken-2 ">
            <ul className="right">
                    <li><NavLink to='/studentsignin'>Student</NavLink></li>
                    <li><NavLink to='/companieslogin'>Campany</NavLink></li>
            </ul>
        </div>
     </ul>
    )
}

export default CpSignedOutLinks;
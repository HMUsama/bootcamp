import React from 'react'
import { NavLink } from 'react-router-dom'

const StdSignedOutLinks = () => {
    return(
     <ul className="right">
         <div className="  right darken-2 ">
         <ul className="right">
                 <li><NavLink to='/studentsignin'>Student</NavLink></li>
                 <li><NavLink to='/companieslogin'>Campany</NavLink></li>
                 <li><NavLink to='/adminsignin'>Admin</NavLink></li>
        </ul>
            </div>
     </ul>
    )
}

export default StdSignedOutLinks;
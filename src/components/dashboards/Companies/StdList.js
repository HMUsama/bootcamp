import React from 'react'
import { Link} from 'react-router-dom'
import RSummary from './StdResume'

const StdList =({studentDetails})=>{
    console.log("RSummary",studentDetails)
    // debugger;
    return(
        <div>
        {
            studentDetails && studentDetails.map( jobslist =>{
                return(
                    <div className="project-list sector">
                    <Link to={'/job/'+jobslist.id}>
                    <RSummary studentDetails = {studentDetails} key={jobslist.id}/>
                    </Link>
                    </div>
                )
            })
        }
        </div>
    )
}


export default StdList
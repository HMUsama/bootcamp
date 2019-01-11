import React from 'react'
import { Link} from 'react-router-dom'
import JobSummary from './JobsSummary'

const JobsList =({companyJobs})=>{
    console.log("JOBS",companyJobs)
    // debugger;
    return(
        <div>
        {
            companyJobs && companyJobs.map( jobslist =>{
                return(
                    <div className="project-list sector">
                    <Link to={'/job/'+jobslist.id}>
                    <JobSummary companyJobs = {companyJobs} key={jobslist.id}/>
                    </Link>
                    </div>
                )
            })
        }
        </div>
    )
}


export default JobsList
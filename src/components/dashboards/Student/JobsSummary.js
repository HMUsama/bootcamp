import React from 'react'

const JobSummary = ({companyJobs}) =>{
console.log("Summary",companyJobs)
// debugger;
    return(
        <div>
            {
            companyJobs && companyJobs.map( (item,index )=>{
                return(
                 <div className="card z-depth-0 project-summary"key={index}>
                    <div className="card-content black-text text-darken-3">
                     <span className="card-title">{item.jobTitle} </span>
                     <p className="black-text">{item.message}</p>
                    </div>
                 </div>
                )
            })
        }
        </div>
    )
}


export default JobSummary
import React from 'react'
import { Link} from 'react-router-dom'
import JobSummary from './JobsSummary'

// const JobsList =({companyJobs})=>{
//     // console.log("JOBS",companyJobs)
//     debugger;
//     return(
//         <div>
//         {
//             companyJobs && companyJobs.map( (jobslist,index) =>{
//                 return(
//                     <div className="project-list sector"key={index}>
//                     <Link to={'/job/'+jobslist.id}>
//                     <JobSummary companyJobs = {companyJobs} key={jobslist.id}/>
//                     </Link>
//                     </div>
//                 )
//             })
//         }
//         </div>

//     )
// }

const JobsList =({companyJobs})=>{
    console.log("summary in jobs",companyJobs)
    // debugger;
    if(companyJobs){
    return(
        <div>
                    <JobSummary companyJobs = {companyJobs} />
        </div>
        )
    } else{
        return(
            <div className="container center">
            <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue">
                        <div className="circle-clipper left">
                        <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                        </div><div className="circle-clipper right">
                        <div className="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default JobsList







// <div>
// {
//      companyJobs.map( (jobslist,index) =>{
//         console.log("``````````",jobslist)
//         return(
//             <div className="project-list sector"key={index}>
//             <Link to={'/job/'+jobslist.id}>
//             <JobSummary companyJobs = {companyJobs} key={jobslist.id}/>
//             </Link>
//             </div>
//         )
//     })
// }
// </div>
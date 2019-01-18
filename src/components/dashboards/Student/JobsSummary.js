import React from 'react'
import { Link} from 'react-router-dom'

const JobSummary = ({companyJobs}) =>{
console.log("Summary",companyJobs)
// debugger;
if(companyJobs){
    return(
         <div>
            {
            companyJobs && companyJobs.map( (item,index )=>{
                return(
                 <div className="card z-depth-0 project-summary"key={index}>
                   <Link to={'/job/'+item.id} key={item.id}>
                    <div className="card-content black-text text-darken-3">
                     <span className="card-title">Company:{item.companyName} </span>
                     <p className="black-text">Message:{item.message}</p>
                    </div>
                    </Link>
                 </div>
                )
            })
        }
        </div>
    )
}else{
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
        // <div>
        //     {
        //     companyJobs && companyJobs.map( (item,index )=>{
        //         return(
        //          <div className="card z-depth-0 project-summary"key={index}>
        //             <div className="card-content black-text text-darken-3">
        //              <span className="card-title">{item.companyName} </span>
        //              <p className="black-text">{item.message}</p>
        //             </div>
        //          </div>
        //         )
        //     })
        // }
        // </div>
}


export default JobSummary











{/* <div>
{
companyJobs && companyJobs.map( (item,index )=>{
    return(
     <div className="card z-depth-0 project-summary"key={index}>
        <div className="card-content black-text text-darken-3">
         <span className="card-title">{item.companyName} </span>
         <p className="black-text">{item.message}</p>
        </div>
     </div>
    )
})
}
</div> */}
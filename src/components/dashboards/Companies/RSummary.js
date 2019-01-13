import React from 'react'

const RSummary =({studentDetails})=>{
console.log("Summary",studentDetails)
// debugger;
    return(
        <div>
            {/* {
            studentDetails && studentDetails.map( item =>{
                return(
                 <div className="card z-depth-0 project-summary">
                    <div className="card-content black-text text-darken-3">
                     <span className="card-title">{item.jobTitle} </span>
                     <p className="black-text">{item.message}</p>
                    </div>
                 </div>
                )
            })
        } */}
        </div>
    )
}


export default RSummary
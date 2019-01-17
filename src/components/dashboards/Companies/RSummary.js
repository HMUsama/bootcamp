import React from 'react'

// debugger;
const RSummary = ({Details}) =>{
// console.log("Summary**",Details)
    return(
        <div>
            {
            Details && Details.map( (item,index ) =>{
                // console.log("item",item)
                return(
                 <div className="card z-depth-0 project-summary"key={index}>
                    <div className="card-content black-text text-darken-3">
                     <span className="card-title">{item.email} </span>
                     <p className="black-text">{item.number}</p>
                    </div>
                 </div>
                )
            })
        }
        </div>
    )
}


export default RSummary
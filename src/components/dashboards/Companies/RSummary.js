import React from 'react'
import { Link} from 'react-router-dom'

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
                    <Link to={'/resume/'+item.id} key={item.id}>
                        <div className="card-content black-text text-darken-3">
                        <span className="card-title">{item.email} </span>
                        <p className="black-text">{item.number}</p>
                        </div>
                    </Link>
                 </div>
                )
            })
        }
        </div>
    )
}


export default RSummary
// import React, { Component } from 'react'
import React from 'react'
import { Link} from 'react-router-dom'
import RSummary from './RSummary'


const StdList =({Details})=>{
    // console.log("RSummary",Details)
    // debugger;
    return(
        <div>
        {
            Details && Details.map( (list,index) =>{
                return(
                <div className="project-list sector"key={index}>
                    <Link to={'/resume/'+list.id}>
                    <RSummary Details = {Details} key={list.id}/>
                    </Link>
                </div>
                )
            })
        }
        </div>
    )
}


export default StdList














// const StdList =({Details})=>{
//     console.log("summary in jobs",Details)
//     // debugger;
//     if(Details){
//         return(
//             <div>
//                     {
//                         Details && Details.map( (resume,index) =>{
//                             return(
//                                 <div className="project-resume sector"key={index}>
//                                 <Link to={'/resume/'+resume.id}>
//                                 <RSummary Details = {Details} key={resume.id}/>
//                                 </Link>
//                                 </div>
//                             )
//                         })
//                     }
//             </div>
//         )
//     } else{
//         return(
//             <div className="container center">
//             <div className="preloader-wrapper big active">
//                     <div className="spinner-layer spinner-blue">
//                         <div className="circle-clipper left">
//                         <div className="circle"></div>
//                         </div><div className="gap-patch">
//                         <div className="circle"></div>
//                         </div><div className="circle-clipper right">
//                         <div className="circle"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }





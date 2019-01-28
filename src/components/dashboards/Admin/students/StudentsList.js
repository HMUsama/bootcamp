import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import Loader from '../Loder'
// import './DashboardAdmin.scss';


class StudentsList extends Component {
    render() {
        const { StudentDetails } = this.props;
    return(
    <div>
         <h4 className="center black-text text-darken-3">Student List</h4>
            { StudentDetails != undefined ? 
                <div className="container section project-details">
                <div>
                { StudentDetails.map( (item,index ) =>{
                return(
                 <div className="card z-depth-0"id={`card-${index}`}>
                    <Link to={'/student/'+item.id}>
                    
                        <div className="card z-depth-0 project-summary"key={index}>
                            <div className="card-content black-text text-darken-3">
                            <span className="card-title">Name:{item.name} </span>
                            <p className="black-text">Number:{item.number}</p>
                            <p className="black-text">Email:{item.email}</p>
                            </div>  
                            
                        </div>
                    </Link>
                 </div>
                    )
                })
                }
            </div>
                </div>:<Loader/> 
            }
    </div>
    )
  }
}
     

export default StudentsList
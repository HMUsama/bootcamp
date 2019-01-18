import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import Loader from '../Loder'



class CompaniesList extends Component {
    render() {
        const { companyJobs } = this.props;

    return(
    <div>
        <h4 className="center black-text text-darken-3">Companies List</h4>
        { companyJobs != undefined ? 
        <div className="container section project-details">
            <div>
            {
            companyJobs.map( (item,index) =>{
                return(
                <div className="card z-depth-0"key={index}>
                    <Link to={'/company/'+item.id} key={item.id}>
                        <div className="card z-depth-0 project-summary">
                            <div className="card-content black-text text-darken-3">
                            <span className="card-title">Name:{item.companyName} </span>
                            <p className="black-text">Job Title:{item.jobTitle}</p>
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
     

export default CompaniesList
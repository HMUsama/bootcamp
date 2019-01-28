// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import { deleteJobCp } from '../../../../store/actions/admin/UpdateDeleteActionCp'

import Loader from '../Loder'
import { Link} from 'react-router-dom'

class CompanyDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            // ID:this.props.id
            // companyJobs:this.props,
            // data:[ { isFavourite:true } ]
        }
        this.Delete=this.Delete.bind(this);
    }
    Delete(){
        // console.log("ID",this.props.ID)
        this.props.deleteJobCp(this.props.ID)
    }
   render(){
    //    debugger
    const { ID } =this.props;
    const { CompanyJob } =this. props;
    if(CompanyJob){
return(
    <div>
      <h4 className="center white-text text-darken-3">Company Details</h4>
        <div className="container section project-details">
          <div className="card z-depth-0">
             <div>
                <div className="card-content">
                <span className="card-title">Job Title:{CompanyJob.jobTitle}</span>
                <p>SOFTWARE HOUSE:{CompanyJob.industry}</p>
                <p>Number:{CompanyJob.number}</p>
                <p>Message:{CompanyJob.message}</p>
                </div>
                <div className="card-action gret lighten-4 black-text">
                <p>Location:{CompanyJob.location}</p>
                <button className="btn waves-effect waves-light left"
                onClick={this.Delete}
                >Delete
                <i className="material-icons left">delete</i>
                </button>
                <Link to={'/editCp/'+ID}>
                <button className="btn waves-effect waves-light right"
                >Edit
                    <i className="material-icons right">edit</i>
                </button>
                </Link>
                </div>
              </div>
            </div>
        </div>
    </div>
    )
    }else{
        return(
            <Loader/>
        )
    }   
  }
}
const mapStateToProps = (state,ownProps) => {
    const id= ownProps.match.params.id;
    const companyJobs= state.firestore.data.companyJobs;
    const companyJob= companyJobs ? companyJobs[id] :null
    return{
        CompanyJob:companyJob,
        ID:id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteJobCp: (deleteJob) =>dispatch(deleteJobCp(deleteJob))
    }
}
export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(CompanyDetails)
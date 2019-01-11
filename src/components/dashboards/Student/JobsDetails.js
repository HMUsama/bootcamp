import React from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'

const JobsDetails =(props)=>{
    // const id=props.match.params.id;
    // console.log("JOBS DETAILS",props)
    const { companyJob } = props;
    console.log("JOBS DETAILS 1111",companyJob)
    if(companyJob){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div>
                        <div className="card-content">
                        <span className="card-title">Industry:{companyJob.industry}</span>
                       <p>Job Title:{companyJob.jobTitle}</p>
                       <p>Number:{companyJob.number}</p>
                       <p>{companyJob.message}</p>
                        </div>
                        <div className="card-action gret lighten-4 black-text">
                        <p>Location:{companyJob.location}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else{
        return(
            <div className="container center">
            
                <div class="preloader-wrapper big active">
                    <div class="spinner-layer spinner-blue">
                        <div class="circle-clipper left">
                        <div class="circle"></div>
                        </div><div class="gap-patch">
                        <div class="circle"></div>
                        </div><div class="circle-clipper right">
                        <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    // console.log("Project Deatails",state);
    const id=ownProps.match.params.id;
    const companyJobs=state.firestore.data.companyJobs;
    const companyJob=companyJobs ? companyJobs[id] :null
    return{
        companyJob:companyJob
  }
}


// export default JobsDetails

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(JobsDetails)
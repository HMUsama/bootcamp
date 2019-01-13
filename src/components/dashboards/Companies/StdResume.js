import React from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'

const StdResume =(props)=>{
    // const id=props.match.params.id;
    // console.log("JOBS DETAILS",props)
    const { studentDetails } = props;
    console.log("JOBS DETAILS 1111",studentDetails)
    if(studentDetails){
        return(
            <div className="container section project-details">
                {/* <div className="card z-depth-0">
                    <div>
                        <div className="card-content">
                        <span className="card-title">Industry:{companyJob.industry}</span>
                       <p>Job Title:{companyJob.jobTitle}</p>
                       <p>Number:{companyJob.number}</p>
                       <p>{companyJob.message}</p>
                        </div>
                        <div className="card-action gret lighten-4 black-text">
                        <p>Location:{companyJob.location}</p>
                        <button className="btn waves-effect waves-light ">
                            Submit
                            <i className="material-icons right">send</i>
                        </button>
                        </div>
                    </div>
                </div> */}
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
    const studentDetails=state.firestore.data.studentDetails;
    const studentDetail=studentDetails ? studentDetails[id] :null
    return{
        studentDetails:studentDetail
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(StdResume)
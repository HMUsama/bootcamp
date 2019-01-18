// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'

class StdResume extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         Details:this.props,
    //     }
    // }
   render(){
    const { studentDetail } = this.props;
        if(studentDetail){
                    return(
                        <div className="container section project-details">
                            <div className="card z-depth-0">
                                <div>
                                    <div className="card-content">
                                    <span className="card-title">{studentDetail.name}</span>
                                   <p>Job Title:{studentDetail.email}</p>
                                   <p>Number:{studentDetail.number}</p>
                                   <p>skills{studentDetail.message}</p>
                                    </div>
                                    <div className="card-action gret lighten-4 black-text">
                                    <p>Location:{}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else{
        return(
            <div className="container center">
            <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
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
    }
}
const mapStateToProps = (state,ownProps) => {
    // debugger
    const id= ownProps.match.params.id;
    const studentDetails= state.firestore.data.StudentDetails;
    const studentDetail= studentDetails ? studentDetails[id] :null
    return{
        // Details:Detail
        studentDetail:studentDetail
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(StdResume)
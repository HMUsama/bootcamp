// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import Loader from '../Loder'
import { Link} from 'react-router-dom'

class StudentDetails extends Component {
    constructor(){
        super()
        this.state={
        }
    }

   render(){
    //    debugger
    const { ID } =this.props;
    const { StudentDetail } =this. props;
    if(StudentDetail){
        return(
            <div>
                 <h4 className="center white-text text-darken-3">Student Details</h4>
                 <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div>
                            <div className="card-content">
                            <span className="card-title">Student Name:{StudentDetail.name}</span>
                            <p>Email:{StudentDetail.email}</p>
                            <p>Number:{StudentDetail.number}</p>
                            <p>Message:{StudentDetail.message}</p>
                            </div>
                            <div className="card-action gret lighten-4 black-text">
                            <p>Location:{StudentDetail.location}</p>
                            <Link to={'/editStd/'+ID}>
                            <button className="btn waves-effect waves-light "
                            >Edit
                            <i className="material-icons right">send</i>
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
    const StudentDetails= state.firestore.data.StudentDetails;
    const StudentDetail= StudentDetails ? StudentDetails[id] :null
    return{
        StudentDetail:StudentDetail,
        ID:id
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(StudentDetails)
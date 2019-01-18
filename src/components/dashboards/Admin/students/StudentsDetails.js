// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import Loader from '../Loder'
import { Link} from 'react-router-dom'
import { deleteResumeStd } from '../../../../store/actions/admin/UpdateDeleteActionStd'

class StudentDetails extends Component {
    constructor(props){
        super(props)
        this.state={
        }
        this.Delete=this.Delete.bind(this);
    }
    Delete(){
        console.log("ID",this.props.ID)
        this.props.deleteResumeStd(this.props.ID)
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
                            <button className="btn waves-effect waves-light left"
                            onClick={this.Delete}
                            >Delete
                            <i className="material-icons right">delete</i>
                            </button>
                            <Link to={'/editStd/'+ID}>
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
    const StudentDetails= state.firestore.data.StudentDetails;
    const StudentDetail= StudentDetails ? StudentDetails[id] :null
    return{
        StudentDetail:StudentDetail,
        ID:id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteResumeStd: (deleteResume) =>dispatch(deleteResumeStd(deleteResume))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(StudentDetails)
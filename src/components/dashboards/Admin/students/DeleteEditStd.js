// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import {updateResumeStd} from '../../../../store/actions/admin/UpdateDeleteActionStd'
import Loader from '../Loder'
import { Link} from 'react-router-dom'

class DeleteEditStd extends Component {
    constructor(props){
        super(props)
        this.state={
            uid: props.ID,
            name:"",
            email:" ",
            number:"",
            message:""
        }
    }
    hundleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    hundleSubmit=(e)=>{
        e.preventDefault();
        this.props.updateResumeStd(this.state);
    }
   render(){
    //    debugger
    const { StudentDetail } =this. props;
    if(StudentDetail){
        return(
            <div className="container">
            <form onSubmit={this.hundleSubmit} className="gray">
            <h5 className="white-text text-darken-6 center">Update Student Detail</h5>
            <div className="input-field ">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" onChange={this.hundleChange} />
                <label for="icon_prefix"> Name</label>
            </div>
            <br/>
            <div className="input-field ">
                <i className="material-icons prefix">email</i>
                <input id="email" type="email" onChange={this.hundleChange}/>
                <label for="icon_prefix">Email</label>
            </div>
            <br/>
            <div className="input-field ">
              <i className="material-icons prefix">phone</i>
              <input id="number" type="number" onChange={this.hundleChange}/>
              <label for="icon_telephone">Number</label>
            </div>
            <br/>
            <div className="input-field ">
              <i className="material-icons prefix">insert_comment</i>
              <textarea id="message" className="materialize-textarea"
              onChange={this.hundleChange}
              ></textarea>
              <label for="icon_prefix2">Message</label>
            </div>
            <br/>
                <center>
                    <Link to={'/dashboardAd'}>
                    <button className="btn waves-effect left" 
                        name="action">Cencel
                        <i className="material-icons left">close</i>
                    </button>
                    </Link>
                    <button className="btn waves-effect waves-light right" 
                        type="submit" name="action">Update 
                        <i className="material-icons right">update</i>
                    </button>
                    <div className="red-text center">
                    {/* {authError ? <p>{authError}</p> : null} */}
                     </div>
                </center>
            </form>
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
        updateResumeStd: (ResumeUpdate) =>dispatch(updateResumeStd(ResumeUpdate))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(DeleteEditStd)
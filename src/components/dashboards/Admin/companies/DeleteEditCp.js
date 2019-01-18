// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import {updateJobCp} from '../../../../store/actions/admin/UpdateDeleteActionCp'
import Loader from '../Loder'
import { Link} from 'react-router-dom'

class DeleteEditCp extends Component {
    constructor(props){
        super(props)
        this.state={
            uid: props.ID,
            jobTitle:"",
            industry:"",
            number:"",
            location:"",
            message:""
        }
    }
    // hundleChange=(e)=>{
    //     this.setState({
    //         [e.target.id]:e.target.value
    //     })
    hundleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    hundleSubmit=(e)=>{
        e.preventDefault();
        this.props.updateJobCp(this.state);
    }
// Job Title Industry Number Location Message
   render(){
    //    debugger
    const { CompanyJob } =this. props;
    if(CompanyJob){
        // console.log("CompanyJob",CompanyJob)
        return(
        <div className="container">
        <form onSubmit={this.hundleSubmit} className="gray">
        <h5 className="white-text text-darken-6 center"> Update Job</h5>
        <div className="input-field ">
            <i className="material-icons prefix">title</i>
            <input id="jobTitle" type="text" onChange={this.hundleChange} />
            <label for="icon_prefix"> Job Title</label>
        </div>
        {/* <br/> */}
        <div className="input-field ">
            <i className="material-icons prefix">business</i>
            <input id="companyName" type="text" onChange={this.hundleChange}/>
            <label for="icon_prefix">Company Name</label>
        </div>
        {/* <br/> */}
        <div className="input-field ">
            <i className="material-icons prefix">email</i>
            <input id="email" type="text" onChange={this.hundleChange}/>
            <label for="icon_prefix">Email</label>
        </div>
        {/* <br/> */}
        <div className="input-field ">
          <i className="material-icons prefix">phone</i>
          <input id="number" type="number" onChange={this.hundleChange}/>
          <label for="icon_telephone">Number</label>
        </div>
        {/* <br/> */}
        <div className="input-field ">
          <i className="material-icons prefix">place</i>
          <input id="location" type="text" onChange={this.hundleChange}/>
          <label for="icon_telephone">Location</label>
        </div>
        {/* <br/> */}
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
                <button className="btn waves-effect " 
                     name="action">Cencel
                    <i className="material-icons right">close</i>
                </button>
                </Link>
                <button className="btn waves-effect waves-light " 
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
    const companyJobs= state.firestore.data.companyJobs;
    const companyJob= companyJobs ? companyJobs[id] :null
    return{
        CompanyJob:companyJob,
        ID:id
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        updateJobCp: (updateJob) =>dispatch(updateJobCp(updateJob))
    }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(DeleteEditCp)
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createJobsCp} from '../../../store/actions/CreateProject/CreateJobsActionCp'
import { Redirect } from 'react-router-dom'
import { Link} from 'react-router-dom'

class CreateJobsCp extends Component {
    // constructor(props){
    //     super()
        state={
            jobTitle:"",
            industry:" ",
            number:"",
            location:"",
            message:""
        }
    // }
    hundleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    hundleSubmit=(e)=>{
        e.preventDefault();
        this.props.createJobsCp(this.state);
    }


    render() {
        const {authError,authCp} = this.props;
        // console.log("Auth Cp",authCp);
        // console.log("A***",authStd);
        // if(authStd.uid) return <Redirect to='/'/>
      return (
        <div className="container">
        <form onSubmit={this.hundleSubmit} className="gray">
        <h5 className="white-text text-darken-6 center"> Campany Jobs</h5>
        <div className="input-field ">
            <i className="material-icons prefix">title</i>
            <input id="jobTitle" type="text" onChange={this.hundleChange} />
            <label for="icon_prefix"> Job Title</label>
        </div>
        <br/>
        <div className="input-field ">
            <i className="material-icons prefix">email</i>
            <input id="industry" type="text" onChange={this.hundleChange}/>
            <label for="icon_prefix">Industry</label>
        </div>
        <br/>
        <div className="input-field ">
          <i className="material-icons prefix">phone</i>
          <input id="number" type="number" onChange={this.hundleChange}/>
          <label for="icon_telephone">Number</label>
        </div>
        <br/>
        <div className="input-field ">
          <i className="material-icons prefix">place</i>
          <input id="location" type="text" onChange={this.hundleChange}/>
          <label for="icon_telephone">Location</label>
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
                <Link to={'./dashboardCp'}>
                <button className="btn waves-effect " 
                     name="action">Cencel
                    {/* <i className="material-icons right">send</i> */}
                </button>
                </Link>
                <button className="btn waves-effect waves-light " 
                    type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                </button>
                <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
                 </div>
            </center>
        </form>
    </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return{
        authCp:   state.firebase.auth,
        authError: state.createJobsCp.authError,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createJobsCp: (jobsDetails) =>dispatch(createJobsCp(jobsDetails))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateJobsCp);
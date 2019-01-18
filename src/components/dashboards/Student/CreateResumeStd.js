import React, { Component } from 'react';
import {connect} from 'react-redux'
import {createResume} from '../../../store/actions/CreateProject/CreateResumeActionStd'
// import {signInStd} from '../../../store/actions/authActionsStd'
import { Redirect } from 'react-router-dom'
import { Link} from 'react-router-dom'

class CreateResume extends Component {
    // constructor(props){
    //     super()
        state={
            name:"",
            email:" ",
            number:"",
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
        this.props.createResume(this.state);
    }


    render() {
        const {authError,authStd} = this.props;
        // console.log("A***",authStd);
        // if(authStd.uid) return <Redirect to='/studentsignin'/>
      return (
        <div className="container">
        <form onSubmit={this.hundleSubmit} className="gray">
        <h5 className="black-text text-darken-6 center"> Student Detail</h5>
        <div className="input-field ">
            <i className="material-icons prefix">account_circle</i>
            <input id="name" type="text" onChange={this.hundleChange} />
            <label for="icon_prefix black"> Name</label>
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
                <Link to={'./dashboardStd'}>
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
        authStd:   state.firebase.auth,
        authError: state.createResumeStd.authError,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        createResume: (studendDetails) =>dispatch(createResume(studendDetails))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateResume);
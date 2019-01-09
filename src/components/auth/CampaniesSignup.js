import React, { Component } from 'react'
import {connect} from 'react-redux'
import {companiesSignup} from '../../store/actions/authActionsCp'
import { Redirect } from 'react-router-dom'

class CompaniesSignup extends Component {

        state = {
            companyName:'',
            lastName:'',
            email:'',
            password:'',
        }

hundleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
}
hundleSubmit=(e)=>{
    e.preventDefault();
    this.props.companiesSignup(this.state)
}

  render() {
    const {authError,authCp} = this.props;
    if(authCp.uid) return <Redirect to='/'/>
    return (
        <div className="container">
        <form onSubmit={this.hundleSubmit} className="gray">
        <h5 className="white-text text-darken-3 center">Companies SignUp</h5>

        <div className="input-field">
        <label htmlFor="firstName">Company Name</label>
        <input type="text" id="firstName" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={this.hundleChange} />
        </div>
    {/* <br/> */}
    <br/>
        <div className="input-field">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={this.hundleChange} />
        </div>
    <br/>
        <div className="input-field">
        <button className="btn pink lighten-1 z-depth-1">SignUp</button>
            <div className="red-text center">
                {authError ? <p>{authError}</p> : null}
            </div>
        </div>
        </form>
        </div>
    );
  }
}
const mapStateToProps =(state)=> {
    return{
        authCp: state.firebase.auth,
        authError: state.authCp.authError
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        companiesSignup: (newCampany) => dispatch(companiesSignup(newCampany))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CompaniesSignup);

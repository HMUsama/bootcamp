import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import JobsList from './JobsList'
import { Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    
    render() {
        // debugger
        const { companyJobs,authStd } = this.props;
        // console.log("Dashboard_Std",companyJobs)
        // console.log("authStd",authStd)
        if(!authStd.uid) return <Redirect to='/studentsignin'/>
      return (
        <div>
            <Link to={'/studentResume'}>Create Resume </Link>
            <JobsList companyJobs={companyJobs}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    //   console.log("Dashboard",state.firestore.ordered);
      return{
        authStd:   state.firebase.auth,
        companyJobs: state.firestore.ordered.companyJobs
    }
}


export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(Dashboard)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import JobsList from './JobsList'
import { Link} from 'react-router-dom'
// import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    
    render() {
        // debugger
        const { companyJobs } = this.props;
        console.log("Dashboard_Std",companyJobs)
        // if(authStd.uid) return <Redirect to='/studentsignin'/>
      return (
        <div>
            <Link to={'/studentResume'}>Create Resume </Link>
            <JobsList companyJobs={companyJobs}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    //   console.log("Dashboard",state);
      return{
        authStd:   state.firebase.auth,
        companyJobs: state.firestore.ordered.companyJobs
    }
}

// export default connect(mapStateToProps)(Dashboard)

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(Dashboard)
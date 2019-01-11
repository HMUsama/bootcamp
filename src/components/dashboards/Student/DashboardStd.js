import React, { Component } from 'react';
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import JobsList from './JobsList'


class Dashboard extends Component {
    
    render() {
        const { companyJobs } = this.props;
        console.log("Jobs___",companyJobs)

      return (
        <div>
            <JobsList companyJobs={companyJobs}/>
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
      console.log("Dashboard",state);
      return{
        companyJobs: state.firestore.ordered.companyJobs
    }
}

// export default connect(mapStateToProps)(Dashboard)

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(Dashboard)
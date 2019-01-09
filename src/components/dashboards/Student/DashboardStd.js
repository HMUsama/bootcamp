import React, { Component } from 'react';
import { connect } from 'react-redux'
import {compose,combineReducers,createStore } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'


class Dashboard extends Component {
    
    render() {
        console.log("Jobs___",this.props)
        // const {  } = this.props;

      return (
        <div>
            <h1>adasd
            </h1>
           
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
      console.log("Dashboard",state);
      return{
        companyJobs: state.createJobsCp.jobsDetails
    }
}

// export default connect(mapStateToProps)(Dashboard)

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"}
                ])
                )(Dashboard)
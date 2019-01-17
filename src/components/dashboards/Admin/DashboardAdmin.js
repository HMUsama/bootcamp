import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import CompaniesList from './companies/CompaniesList'
import StudentsList from './students/StudentsList'

class DashboardAd extends Component {
    render() {
        const { companyJobs,StudentDetails,authAd} = this.props;
        if(authAd.uid) return <Redirect to='/adminsignin'/>

        return(
          <div className="row">
              {/* ********Student List******** */}
              <div className='col s12 m6 '>
                <CompaniesList companyJobs={companyJobs}/>
              </div>

              {/* ********Student List******** */}
              <div className='col s12 m5 offset-m1'>
                <StudentsList StudentDetails={StudentDetails}/>
              </div>
        </div>
        )
    }
  }
          

const mapStateToProps = (state) => {
    return{
    authAd:   state.firebase.auth,
    companyJobs: state.firestore.ordered.companyJobs,
    StudentDetails: state.firestore.ordered.StudentDetails,
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "companyJobs"},
                {collection: "StudentDetails"}
                ])
                )(DashboardAd)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import { Link} from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import StdList from './StdList'

class DashboardCp extends Component {
    render() {
        // debugger;
        const { Details,authCp} = this.props;
        if(!authCp.uid) return <Redirect to='/companieslogin'/>
      return (
        <div>
             <Link to={'/createjobs'}>Create Job </Link>
            <StdList Details={Details}/>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    // console.log("Dashboard_Cp_state",state.firestore.ordered.StudentDetails);
    return{
    authCp:   state.firebase.auth,
    Details: state.firestore.ordered.StudentDetails
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(DashboardCp)
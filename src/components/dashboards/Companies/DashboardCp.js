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
        // const { studentDetails,authCp} = this.props;
        console.log("studentDetails**",this.props.studentDetails)
        console.log("Props**",this.props)
        // console.log("authCp",authCp)
        // if(authCp.uid) return <Redirect to='/companieslogin'/>
      return (
        <div>
            {/* <StdList studentDetails={studentDetails}/> */}
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
      console.log("Dashboard_Cp",state);
      return{
        authCp:   state.firebase.auth,
        studentDetails: state.firestore.ordered.studentDetails
    }
}

// export default connect(mapStateToProps)(Dashboard)

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(DashboardCp)
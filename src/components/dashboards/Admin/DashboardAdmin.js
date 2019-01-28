import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import CompaniesList from './companies/CompaniesList'
import StudentsList from './students/StudentsList'
import './DashboardAdmin.css';

class DashboardAd extends Component {
      constructor(props){
        super(props);
        this.state = {
          StudentDetail: this.props.StudentDetails,
          // index:this.props.StudentDetails[0]
        }
      }
    render() {
        const { companyJobs,StudentDetails,authAd} = this.props;
        console.log("authAd***",authAd)
        console.log("data***",StudentDetails)
        // console.log("data****",this.state.index)
        // const property = properties[0]

        if(!authAd.uid) return <Redirect to='/adminsignin'/>
        return(
          <div>
            {/* <div className="cards-slider">
                        <div className="cards-slider-wrapper"style={{
                            'transform':`translateX(-${proper})`
                        }}></div> */}
                          {/* </div>  
                        </div> */}

          <div className="row">
              {/* ********Companies List******** */}
              <div className='col s12 m6 '>
                <CompaniesList companyJobs={companyJobs}/>
              </div>

              {/* ********Student List******** */}
              <div className='col s12 m5 offset-m1'>
                <StudentsList StudentDetails={StudentDetails}/>
              </div>
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
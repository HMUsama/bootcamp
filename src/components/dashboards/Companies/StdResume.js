// import React from 'react'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose } from 'redux'
import {  firestoreConnect  } from 'react-redux-firebase'

class StdResume extends Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         Details:this.props,
    //     }
    // }
   render(){
    const { Details } = this.props;
    // console.log("Details DETAILS 1111",Details)
        if(Details){
                    return(
                        <div className="container section project-details">
                            <div className="card z-depth-0">
                                <div>
                                    <div className="card-content">
                                    <span className="card-title">{Details.id}</span>
                                   <p>Job Title:{Details}</p>
                                   <p>Number:{Details.number}</p>
                                   <p>skills{Details.message}</p>
                                    </div>
                                    <div className="card-action gret lighten-4 black-text">
                                    <p>Location:{}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else{
        return(
            <div className="container center">
            <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-green-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          </div>
       )
     }
    }
}
const mapStateToProps = (state,ownProps) => {
    // debugger
    console.log("  state",state);
    // console.log("  ownProps",ownProps);
    const id= ownProps.match.params.id;
    // console.log("  ID**",id);
    const Details= state.firestore.data.Details;
    const Detail= Details ? Details[id] :null
    // console.log("Details Map",Detail)
    return{
        Details:Detail
        // Details:state
    }
}

export default compose(connect(mapStateToProps),
                firestoreConnect ([
                {collection: "StudentDetails"}
                ])
                )(StdResume)
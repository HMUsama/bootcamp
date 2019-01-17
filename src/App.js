import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import StudentLogIn from './components/auth/StudentsLogin'
import StudentSignup from './components/auth/StudentsSignup'
import CompaniesLognin from './components/auth/CampaniesLogin'
import CompaniesSignup from './components/auth/CampaniesSignup'
import AdminLognin from './components/auth/Admin'
import CreateResume from './components/dashboards/Student/CreateResumeStd'
import CreateJobsCp from './components/dashboards/Companies/CreateJobsCompanies'

import Dashboard from './components/dashboards/Student/DashboardStd'
import JobsList from './components/dashboards/Student/JobsList'
import JobSummary from './components/dashboards/Student/JobsSummary'
import JobsDetails from './components/dashboards/Student/JobsDetails'

import DashboardCp from './components/dashboards/Companies/DashboardCp'
import RSummary from './components/dashboards/Companies/RSummary'
import StdList from './components/dashboards/Companies/StdList'
import StdResume from './components/dashboards/Companies/StdResume'

import DashboardAd from './components/dashboards/Admin/DashboardAdmin'
import CompaniesList from './components/dashboards/Admin/companies/CompaniesList'
import CompanyDetails from './components/dashboards/Admin/companies/CompaniesDetails'
import DeleteEditCp from './components/dashboards/Admin/companies/DeleteEditCp'

import StudentsList from './components/dashboards/Admin/students/StudentsList'
import StudentDetails from './components/dashboards/Admin/students/StudentsDetails'
import DeleteEditStd from './components/dashboards/Admin/students/DeleteEditStd'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>

          {/* Admin dashboard Screen*/}
          <Route exact path="/dashboardAd"   component={DashboardAd}/>
           {/* Company Screen*/}
          <Route exact path="/companiesList/:id"   component={CompaniesList}/>
          <Route exact path="/company/:id"   component={CompanyDetails}/>
          <Route exact path="/editCp/:id"   component={DeleteEditCp}/>

          {/* Student Screen*/}
          <Route exact path="/studentsList/:id"   component={StudentsList}/>
          <Route exact path="/student/:id"   component={StudentDetails}/>
          <Route exact path="/editStd/:id"   component={DeleteEditStd}/>

          {/* Admin dashboard Screen End*/}

          {/* Company dashboard Screen*/}
          <Route exact path="/dashboardCp"   component={DashboardCp}/>
          <Route exact path="resumeSummary"   component={RSummary}/>
          <Route exact path="/resumeslist/:id"   component={StdList}/> 
          <Route exact path="/resume/:id"   component={StdResume}/>
          {/* Student dashboard Screen*/}
          <Route exact path="/dashboardStd"   component={Dashboard}/>
          <Route exact path="/jobSummary"   component={JobSummary}/>
          <Route exact path="/jobslist/:id"   component={JobsList}/>
          <Route exact path="/job/:id"   component={JobsDetails}/>

          <Route exact path="/createjobs"   component={CreateJobsCp}/>
          <Route exact path="/studentResume"   component={CreateResume}/>
          <Route exact path="/adminsignin"   component={AdminLognin}/>
          
          <Route exact path="/studentsignin"   component={StudentLogIn}/>
          <Route exact path="/studentsignup"   component={StudentSignup}/>

          <Route exact path="/companieslogin"   component={CompaniesLognin}/>
          <Route exact path="/companiessignup"   component={CompaniesSignup}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

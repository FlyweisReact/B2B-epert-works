import React, { useEffect } from "react";
import "./App.css";
import "./assets/icomoon.css";
import "./assets/bootstrap.css";
import { Switch, Route  } from "react-router-dom";
import Header from "./component/Header/Header";
import LMSMain from "./component/LMSMain/LMSMain";
import LMSVideos from "./component/LMSVideos/LMSVideos";
import Pricing from "./component/Pricing/Pricing";
import LoginComponent from "./component/Login/LoginComponent";
import Contact from "./component/Contact/Contact";
import { LandingPage } from "./component/LandingPage/LandingPage";
import ABoutUS from "./component/AboutUS/AboutUS";
import Logout from "./component/Logout/Logout";
import { HRanalytics } from "./component/HRanalytics/HRanalytics";
import EmployeeDataForm from "./component/HRanalytics/EmployeeDataForm/EmployeeDataForm";
import UserEntitlement from "./component/UserEntitlement/Users/UserEntitlement"
import RouteWithErrorBoundary from "./component/ErrorBoundary/RouteWithErrorBoundary";
import ErrorBoundary from "./component/ErrorBoundary/ErrorBoundary";
import ChangePassword from "./component/Login/ChangePassword/ChangePassword";
import ErrorScreen from "./component/ErrorBoundary/ErrorScreen/ErrorScreen";
import SuperAdmin from "./component/SuperAdmin/Partner/SuperAdmin";
import Group from "./component/SuperAdmin/Group/Group";
import Team from "./component/SuperAdmin/Team/Team"
import Users from "./component/SuperAdmin/Users/Users"
import ForgotPassword from "./component/Login/ForgotPassword/ForgotPassword";
import ExpertBusiness from "./component/ExpertBusiness/ExpertBusiness";
import signup from "./component/signup/signup";
import FAQ from "./component/OtherFooterPages/FAQ";
import Policy from "./component/OtherFooterPages/Policy";
import Terms from "./component/OtherFooterPages/Terms";
import AdminTeamPage from "./component/UserEntitlement/Team/Team";
import Package from "./component/SuperAdmin/Group/Package/Package";
import Cart from "./component/Cart/Cart";
import Payment from "./component/Payment/Payment";
import Mentorship from "./component/Mentorship/Mentorship";
import Dashboard from "./component/Dashboard/Dashboard";
import {useSelector,useDispatch} from 'react-redux'
import { RestClient } from "./util/RestClient"
import { ProdConfiguration } from "./util/restConstants";
import {RootState} from "./redux/reducers/index"
import UserCourseTable from "./component/Dashboard/UserCourseTable/UserCourseTable";
import * as actions from "./redux/actions"
import Events from "./component/Events/Events";
export const App = () => {
  const authState = useSelector((state: RootState) => state.authToken);
  let restClient: RestClient = new RestClient();
const dispatch=useDispatch()
  const getMenuItems=async()=>{
    let role='ROLE_PUBUSER';
    if(authState) {
      role=authState.role;
    let response: any = await restClient.getCall(
        ProdConfiguration.PROD_COURSE_URL + `/user/${role}/pages`,
        authState.access_token
       

    )
    dispatch(actions.storeMenuItems(response?.result?.pages||[]));
    localStorage.setItem('menuItems',JSON.stringify(response?.result?.pages||[]))
  
  }
    
  }
  useEffect(() => {
    document.title = "Expert Works";

   getMenuItems();
  })
  return (
    <div className="App">
      <Switch>
        <RouteWithErrorBoundary path="/old" component={ErrorScreen} exact />
        <RouteWithErrorBoundary path="/" component={LandingPage} exact />
        <RouteWithErrorBoundary path="/addCourse" component={AddC} exact />
        <RouteWithErrorBoundary path="/courses" component={LMSMain} exact />
        <RouteWithErrorBoundary path="/course/:name/:level" render={()=><LMSVideos/>} exact />
        <RouteWithErrorBoundary path="/pricing" component={Pricing} exact />
        <RouteWithErrorBoundary path="/login" component={LoginComponent} exact />

        <RouteWithErrorBoundary path="/Events" component={Events} exact />
        <RouteWithErrorBoundary path="/contact" component={Contact} exact />
        <RouteWithErrorBoundary path="/about-us" component={ABoutUS} exact />
        <RouteWithErrorBoundary path="/hr-analytics" component={HRanalytics} exact />
        <RouteWithErrorBoundary path="/logout" component={Logout} exact />
        <RouteWithErrorBoundary path="/employee-data-form" component={EmployeeDataForm} exact />
        <RouteWithErrorBoundary path="/admin/add-user" component={UserEntitlement} exact />
        <RouteWithErrorBoundary path="/admin" component={AdminTeamPage} exact />
        <RouteWithErrorBoundary path="/super-admin/add-partner" component={SuperAdmin} exact />
        <RouteWithErrorBoundary path="/super-admin/add-group" component={Group} exact />
        <RouteWithErrorBoundary path="/super-admin/add-team" component={Team} exact />
        <RouteWithErrorBoundary path="/super-admin/add-admin" component={Users} exact />
        <RouteWithErrorBoundary path="/super-admin/add-package" component={Package}/>

        <RouteWithErrorBoundary path="/change-password" component={ChangePassword} exact />
        <RouteWithErrorBoundary path="/forgot-password" component={ForgotPassword} exact />
        <RouteWithErrorBoundary path="/expert-business" component={ExpertBusiness} exact />
        <RouteWithErrorBoundary path="/signup" component={signup}/>
        <RouteWithErrorBoundary path="/faq" component={FAQ}/>
        <RouteWithErrorBoundary path="/policy" component={Policy}/>
        <RouteWithErrorBoundary path="/terms" component={Terms}/>
        <RouteWithErrorBoundary path="/cart" component={Cart}/>
        <RouteWithErrorBoundary path="/payment" component={Payment}/>
        <RouteWithErrorBoundary path="/mentorship" component={Mentorship}/>
        <RouteWithErrorBoundary path="/dashboard" component={Dashboard} exact/>
        <RouteWithErrorBoundary path="/dashboard/user-courses" component={UserCourseTable} exact/>

        {/* <RouteWithErrorBoundary path="/" component={LandingPage} exact />
        <RouteWithErrorBoundary path="/courses" component={LMSMain} exact />
        <RouteWithErrorBoundary path="/course/:name" component={LMSVideos} exact />
        <RouteWithErrorBoundary path="/pricing" component={Pricing} exact />
        <RouteWithErrorBoundary path="/login" component={LoginComponent} exact />
        <RouteWithErrorBoundary path="/contact" component={Contact} exact />
        <RouteWithErrorBoundary path="/about-us" component={ABoutUS} exact />
        <RouteWithErrorBoundary path="/hr-analytics" component={HRanalytics} exact />
        <RouteWithErrorBoundary path="/logout" component={Logout} exact />
        <RouteWithErrorBoundary path="/employee-data-form" component={EmployeeDataForm} exact />
        <RouteWithErrorBoundary path="/admin" component={UserEntitlement} exact />
        <RouteWithErrorBoundary path="/change-password" component={ChangePassword} exact /> */}


      </Switch>
    </div>
  );
};

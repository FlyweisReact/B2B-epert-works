import { TOGGLE_MENU, SELECT_PLAY_VIDEO } from './actionTypes';
import { MENU_DROP_DOWN } from '../constants';
import { ActionType } from './reduxInterfaces'
import { RestClient } from "../util/RestClient"
import { RootState } from "../redux/reducers/index";
import { ProdConfiguration } from "../util/restConstants";
import * as actionTypes from "./actionTypes"
export const toggleMenu = (id: string) => ({
    type: TOGGLE_MENU,
    payload: id
});

export const selectAndPlayVideo = (index: string) => ({
    type: SELECT_PLAY_VIDEO,
    payload: index
});

export const fetchUsers = (authState: any,groupId?:any) => {
    
    return async (dispatch: any) => {
        let restClient: RestClient = new RestClient();

        // let response: any = await restClient.getCall(
        //     ProdConfiguration.PROD_COURSE_URL + `/user`,
        //     authState.access_token

        // )
        let response: any = await restClient.getCall(
            ProdConfiguration.PROD_COURSE_URL + `/user?groupId=${groupId}`,
            authState.access_token

        )
        dispatch({
            type: actionTypes.FETCH_USERS_ADDED,
            userData: response.result
        })

    }
}

export const fetchUsersInAdmin = (authState: any,teamId?:any) => {
    
    return async (dispatch: any) => {
        let restClient: RestClient = new RestClient();

        // let response: any = await restClient.getCall(
        //     ProdConfiguration.PROD_COURSE_URL + `/user`,
        //     authState.access_token

        // )
        let response: any = await restClient.getCall(
            ProdConfiguration.PROD_COURSE_URL + `/user?teamId=${teamId}`,
            authState.access_token

        )
        dispatch({
            type: actionTypes.FETCH_USERS_ADDED,
            userData: response.result
        })

    }
}

export const fetchPartners = (authState: any) => {
    
    return async (dispatch: any) => {
        let restClient: RestClient = new RestClient();

        let response: any = await restClient.getCall(
            ProdConfiguration.PROD_COURSE_URL + "/partner",
            authState.access_token

        )
        
        dispatch({
            type: actionTypes.FETCH_PARTNERS_ADDED,
            userData: response.result
        })

    }
}

export const fetchGroups = (authState: any,partnerid:string) => {
    
    return async (dispatch: any) => {
        let restClient: RestClient = new RestClient();

        let response: any = await restClient.getCall(
            ProdConfiguration.PROD_COURSE_URL+ `/group?partnerId=${partnerid}`,
            authState.access_token

        )
        dispatch({
            type: actionTypes.FETCH_GROUPS_ADDED,
            GroupData: response.result
        })

    }
}
export const fetchTeams = (authState: any,groupid:string) => {
    
    return async (dispatch: any) => {
        let restClient: RestClient = new RestClient();

        let response: any = await restClient.getCall(
            ProdConfiguration.PROD_COURSE_URL+ `/team?groupId=${groupid}`,
            authState.access_token

        )
        dispatch({
            type: actionTypes.FETCH_TEAMS_ADDED,
            TeamData: response.result
        })

    }
}
export const storeSelectedPartner=(selectedParter:any)=>{
    return{
        type:actionTypes.SELECTED_PARTNER,
        selectedParter:selectedParter

    }
}
export const storeSelectedGroup=(selectedgroup:any)=>{
    return{
        type:actionTypes.SELECTED_GROUP,
        selectedgroup:selectedgroup

    }
}
export const storeSelectedTeam=(selectedTeam:any)=>{
    return{
        type:actionTypes.SELECTED_TEAM,
        selectedTeam:selectedTeam

    }
}

export const storeFormattedCourses=(formattedourses:any)=>{
    return {
        type:actionTypes.FORMATTED_COURSES,
        formatedCourses:formattedourses

    }
}

export const storeMenuItems=(menuItems:any)=>{
    return{
        type:actionTypes.STORE_MENU_ITEMS,
        menuItems:menuItems
    }

}

export const storeSelectedDashboardUser=(selectedDashbordUser:any)=>{
  
    return    {
        type:actionTypes.STORE_SELECTED_DASHBOARD_USER,
        selectedDashboardUser:selectedDashbordUser
    }

}

export const storeDashBoardData=(DashBoardData:any)=>{
    return{
        type:actionTypes.STORE_DASHBOARD_DATA,
        DashBoardData:DashBoardData
        
    }
}
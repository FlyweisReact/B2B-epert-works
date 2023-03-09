import * as actionTypes from "../actionTypes"
const initialState = {
  selectedDashBoardUser: {},
  
  DashBoardData: {}
};

const commonReducer = (state = initialState, action: any) => {
  // debugger;
  switch (action.type) {
    case actionTypes.STORE_SELECTED_DASHBOARD_USER: {

      console.log('action.selectedDashboardUser', action.selectedDashboardUser)
      return {
        ...state,
        selectedDashBoardUser: action.selectedDashboardUser
      }
    }
    case actionTypes.STORE_DASHBOARD_DATA: {
      return {
        ...state,
        DashBoardData: action.DashBoardData,


      }
    }
    default: {
      return state;
    }
  }
};

export default commonReducer;
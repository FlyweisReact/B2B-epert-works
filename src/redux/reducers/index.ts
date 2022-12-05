import { combineReducers } from "redux";
import videoReducer from "./videoReducer";
import commonReducer from "./commonReducer"
import pageReducer from './pageReducer';
import authTokenReducer from './authTokenReducer';
import userEntitlementReducer from "./userEntitlementReducer"
import superAdminreducer from "./superAdminReducer"

export const rootReducer = combineReducers({ 
    video: videoReducer, 
    commonReducer: commonReducer,
    page: pageReducer,
    authToken: authTokenReducer,
    userEntitlementReducer:userEntitlementReducer,
    superAdminreducer:superAdminreducer });
    
export type RootState = ReturnType<typeof rootReducer>
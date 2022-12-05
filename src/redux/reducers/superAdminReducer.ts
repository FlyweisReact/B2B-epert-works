import * as actionTypes from '../actionTypes'
const initialState = {
    partnerData: [],
    GroupData: [],
    TeamData: [],
    selectedParter: {},
    selectedgroup: {},
    selectedTeam: {}
};

const SuperAdminReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SELECTED_PARTNER: {
            
            return {
                ...state,

                selectedParter: action.selectedParter
            }
        }
        case actionTypes.SELECTED_GROUP: {
            
            return {
                ...state,

                selectedgroup: action.selectedgroup
            }
        }
        case actionTypes.SELECTED_TEAM: {
            
            return {
                ...state,

                selectedTeam: action.selectedTeam
            }
        }
        case actionTypes.FETCH_PARTNERS_ADDED: {
            return {
                ...state,

                partnerData: action.userData
            }
        }
        case actionTypes.FETCH_GROUPS_ADDED: {
            return {
                ...state,

                GroupData: action.GroupData
            }
        }
        case actionTypes.FETCH_TEAMS_ADDED: {
            return {
                ...state,

                TeamData: action.TeamData
            }
        }
        default: {
            return state;
        }
    }
};

export default SuperAdminReducer;
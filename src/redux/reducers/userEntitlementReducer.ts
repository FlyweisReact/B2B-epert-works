import * as actionTypes from '../actionTypes'
const initialState = {
    userData:[],
    partnerData:[],
    formatedCourses:[]
};

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_ADDED: {
            return {
                ...state,

                userData: action.userData
            }
        }
        case actionTypes.FETCH_PARTNERS_ADDED: {
            return {
                ...state,

                partnerData: action.userData
            }
        }
        case actionTypes.FORMATTED_COURSES: {
            return {
                ...state,

                formatedCourses: action.formatedCourses
            }
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
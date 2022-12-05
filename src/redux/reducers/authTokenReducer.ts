import {TOKEN} from '../actionTypes'
let initialState = {};
const authState=localStorage.getItem('user');

if(authState == null){
initialState= ''
}else{
  initialState=JSON.parse(authState)
}
console.log('authState in reducer',authState)
const authTokenReducer = (state = initialState, action: any) => {
  

  switch (action.type) {
    case TOKEN: {
    

      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default authTokenReducer;

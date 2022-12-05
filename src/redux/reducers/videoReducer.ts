import {SELECT_PLAY_VIDEO} from '../actionTypes'
const initialState = {};

const videoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_PLAY_VIDEO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default videoReducer;
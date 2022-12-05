import { MENU_DROP_DOWN } from '../../constants';
import * as actionTypes from '../actionTypes'
let menu:any=localStorage.getItem('menuItems');
let localstrageMenu:any=[]
if(menu){
  localstrageMenu=JSON.parse(menu)
}

const initialState = {
  MenuItems: localstrageMenu
};

const pageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.PAGE: {
      return action.payload;
    }
    case actionTypes.STORE_MENU_ITEMS:{
      
      return {
        ...state,
        MenuItems:action.menuItems

      }
    }
    default: {
      return state;
    }
  }
};

export default pageReducer;
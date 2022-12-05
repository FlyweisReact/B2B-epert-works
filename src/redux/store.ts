import React from 'react'
import {rootReducer} from "./reducers";
import thunk from 'redux-thunk'
import {applyMiddleware,compose,createStore} from 'redux'
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers =compose(
    applyMiddleware(thunk),
   // (window as any).__REDUX_DEVTOOLS_EXTENSION__&& (window as any).__REDUX_DEVTOOLS_EXTENSION__() 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f:any) => f
  )
  
export default createStore(rootReducer,composeEnhancers);
// import  { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';

import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const combinedReducer = combineReducers({
  cart: cartReducer
// OTHER REDUCERS WILL BE ADDED HERE
});

const composeEnhancers = 
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const pReducer = persistReducer(persistConfig, combinedReducer)

const configureStore = (initialState) =>{
  return createStore(
    pReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )
}

export const store = configureStore()
export const persistor = persistStore(store)




// export default configureStore({
//     reducer: {
//       cart: cartReducer,
//     },
//   });
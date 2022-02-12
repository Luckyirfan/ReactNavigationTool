import {createStore, combineReducers} from "redux";
import ProductData from "./ProductData";

export const ProductStore =()=>{
    const store = createStore(combineReducers({ ProductData}),
    
  window.__REDUX_DEVTOOLS_EXTENSION__&&
  window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
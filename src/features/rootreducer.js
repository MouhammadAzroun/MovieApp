import { combineReducers } from "redux";
import { reducer as CartReducer } from "./cart";

const rootReducer = combineReducers({
    cart: CartReducer

})

export {rootReducer};
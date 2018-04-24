import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";
import orderReducer from "./reducers/orderReducer";

const store = createStore(
	combineReducers({ cartReducer, productReducer, orderReducer}),
	{},
	applyMiddleware(logger, thunk)
);

export default store;
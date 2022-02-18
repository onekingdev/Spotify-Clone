import { createStore, applyMiddleware } from "redux";
import Reducers from "../Reducers";
import thunk from "redux-thunk";

export default createStore(Reducers, applyMiddleware(thunk));

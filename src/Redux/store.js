import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { TubesReducer } from "./TubesReducer";
import { thunk } from "redux-thunk";

let reducers = combineReducers({
    TubesReducer,
});

let store = legacy_createStore(reducers, applyMiddleware(thunk));
// window.store = store; // для дэбага ВРЕМЕННО! вызов state через консоль.
export default store;

import { legacy_createStore } from "redux";
import rootReducers from "./reducers/rootReducers";


const store=legacy_createStore(rootReducers)

export default store
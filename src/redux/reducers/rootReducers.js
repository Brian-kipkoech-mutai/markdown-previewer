import { combineReducers } from "redux";
import inputReducer from "./inpureducer";

const rootReducers= combineReducers(
    {
      inputReducer:inputReducer,
    }
)

export  default rootReducers;

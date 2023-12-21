import { combineReducers } from "redux";
import inputReducer from "./inpureducer";
import expandEditorReducer from "./expandEditorReducer";

const rootReducers= combineReducers(
    {
      inputReducer:inputReducer,
      expandEditorReducer:expandEditorReducer

    }
)

export  default rootReducers;

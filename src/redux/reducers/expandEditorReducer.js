import { EDITOR } from "../actions/actionTypes";
import { MINIMIZE } from "../actions/actionTypes";
import { EXPANDPREVIEW } from "../actions/actionTypes";
import { MINIMIZEPREVIEW } from "../actions/actionTypes";

 const defaultState={
    expand:false,
    previewExpand:false
 }

const expandEditorReducer=(state=defaultState,action)=>{
 switch(action.type){
    case EDITOR:
        return{
            ...defaultState,expand:action.payload
        }
    case MINIMIZE:
        return{
            ...defaultState,expand:action.payload
        }
    case EXPANDPREVIEW  :
        return{
            ...defaultState,previewExpand:action.payload
        }
    case MINIMIZEPREVIEW:
        return{
            ...defaultState,previewExpand:action.payload
        }
        
    default: 
        return  state
 }
}


export default expandEditorReducer;
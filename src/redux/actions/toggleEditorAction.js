import { EDITOR } from "./actionTypes";


const expandEditorAction=()=>{
    return{
        type:EDITOR,
        payload:true
    }
}

export default expandEditorAction;

import { MINIMIZE } from "./actionTypes";

const minimizeAction =()=>{
    return{
        type:MINIMIZE,
        payload:false
    }
}

export default minimizeAction
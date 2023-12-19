import { INPUTSTORE } from "./actionTypes";

const inputAction=(input)=>(
   {
    type:INPUTSTORE,
    payload:input
   }
)

export default  inputAction;
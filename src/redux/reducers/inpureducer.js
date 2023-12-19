import { INPUTSTORE } from "../actions/actionTypes"

const  defaultState={
    input:[]
}

const inputReducer=(state=defaultState,action)=>{

    switch(action.type){
        case INPUTSTORE:
        return{
            ...defaultState,input:[...defaultState.input,action.payload]
        }
        default: return state
    }

}
export default inputReducer;
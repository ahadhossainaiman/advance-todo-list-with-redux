/* eslint-disable no-unused-vars */
import { COLOR_CHANGED, STATUS_CHANGED } from "./actionType"


const initialState = {
    status:'All',
    colors:[]
}

const filterReducer = (state=initialState,action) =>{
    switch(action.type){
        case STATUS_CHANGED: 
        return {
            ...state,
            status:action.payload
        }
        case COLOR_CHANGED:
            // eslint-disable-next-line no-case-declarations
            const {color,changeType} = action.payload;
            switch(changeType){
                case 'added':
                    return {
                        ...state,
                        colors:[...state.colors,color]
                    }
                    case 'removed':
                        return {
                            ...state,
                            colors :state.colors.filter(existingColor => existingColor !== color)
                        }
                    default: return state
            }
           default:return state 
    }
}

export default filterReducer;
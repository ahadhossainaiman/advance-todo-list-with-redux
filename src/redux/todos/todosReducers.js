/* eslint-disable no-unused-vars */
import { ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, TOGGLED } from "./actionType"

const initialState = [
    {
        id: 1,
        text: 'Learn React Js',
        completed:true,
        color:'red'
    }
]

const nextTodoId = (todos) =>{
     const maxId = todos.reduce((maxId,todo)=>Math.max(todo.id,maxId),0);
     return maxId + 1; 
}

const todosReducers = (state=initialState,action) =>{
    switch(action.type){
        case ADDED:return[
            ...state,
            {
                id:nextTodoId(state),
                text:action.payload,
                completed:false,
                
            }
        ]
        case TOGGLED:return state.map(todo=>{
            if(todo.id!==action.payload){
                return todo;
            } 
            return {
                    ...todo,
                    completed:!todo.completed
                }
            
        })
        case COLOR_SELECTED: 
        // eslint-disable-next-line no-case-declarations
        const {todoId, color} = action.payload;
        return state.map(todo=>{
            if(todo.id!== todoId){
                return todo;
            }
            return {
                color:color
            }
        })
        case DELETED: return state.filter(todo=>todo.id!== action.payload)

        case ALL_COMPLETED: return state.map(todo=>{
            return {
                ...todo,
                completed:true
            }
        })
        case CLEAR_COMPLETED:
            return state.filter(todo=>!todo.completed)
         default:return  state ;   
}   
    }
    

    export default todosReducers;
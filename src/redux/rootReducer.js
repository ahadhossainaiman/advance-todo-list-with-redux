import { combineReducers } from "redux";
import todosReducers from "./todos/todosReducers";
import filterReducer from "./filters/filterReducer";


const rootReducer = combineReducers({
    todos:todosReducers,
    filters:filterReducer
})
export default rootReducer
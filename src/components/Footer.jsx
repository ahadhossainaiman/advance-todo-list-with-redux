import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/action";


const Footer = () => {
    const dispatch = useDispatch();
    const filters = useSelector(state=>state.filters);
    const todos = useSelector(state=>state.todos);

    const remainingTask = todos.filter(todo=>!todo.completed);
    const numberOfTodos = (no_of_todos) =>{
        switch(no_of_todos){
            case 0:return 'No Task'
            case 1:return '1 Task'
            default: return `${no_of_todos} Tasks`
        }
    }
    const handleStatusChange = (status) =>{
        dispatch( statusChanged(status))
    }
    const handleColorChange = (color) =>{
        console.log(filters.colors.includes(color));
        if(filters.colors.includes(color)){
            dispatch(colorChanged(color,'removed'))
        }else{
            dispatch(colorChanged(color,'added'))
        }
        
    }
    console.log('changeColor',filters);
    // console.log(todos);

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(remainingTask.length)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li onClick={()=>handleStatusChange('All')} className={`cursor-pointer ${filters.status==='All' && 'font-bold'}`}>All</li>
                <li>|</li>
                <li onClick={()=>handleStatusChange('Incomplete')} className={`cursor-pointer ${filters.status==='Incomplete' && 'font-bold'}`}>Incomplete</li>
                <li>|</li>
                <li onClick={()=>handleStatusChange('Complete')} className={`cursor-pointer ${filters.status==='Complete' && 'font-bold'}`}>Complete</li>
                <li></li>
                <li></li>
                <li onClick={()=>handleColorChange('green')} className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.colors.includes('green') && 'bg-green-500' } `}></li>
                <li onClick={()=>handleColorChange('red')} className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.colors.includes('red') && 'bg-red-500' }`}></li>
                <li onClick={()=>handleColorChange('yellow')} className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.colors.includes('yellow') && 'bg-yellow-500' } `}></li>
            </ul>
        </div>
    );
};

export default Footer;
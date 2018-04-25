
import {ADD_TODO} from '../constants/action-type';
import {REMOVE_TODO} from '../constants/action-type';


const InitialState ={
    TodoList : []
};

export const Reducer = (state=InitialState,action) => {
    switch (action.type){
        case ADD_TODO:
        return {...state,TodoList:state.TodoList.concat(action.payload)};
        case REMOVE_TODO:      
        state.TodoList.splice(action.payload,1);  
        return {...state,TodoList:state.TodoList}
        default:
        return state;
    }
};



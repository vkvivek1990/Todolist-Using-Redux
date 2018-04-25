import {ADD_TODO} from '../constants/action-type';
import {REMOVE_TODO} from '../constants/action-type';

export const ADDTODO = (todo) => ({type:ADD_TODO,payload:todo});

export const REMOVETODO = (todo) => ({type:REMOVE_TODO,payload:todo});
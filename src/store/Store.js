import { createStore } from 'redux';
import {Reducer} from '../reducers/Reducers';


export const store = createStore(Reducer);

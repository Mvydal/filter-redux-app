import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filters/filter.reducer';
import * as fromFilterAction from './filters/filter.actions';
// Definimos el estado de la aplicacion

export interface AppState{
    todos: Todo[];
    filter: fromFilterAction.validFilters;
}

//Constante que enviaremos al app.module con todos los reducers del store. Sera del tipo ActionReducerMap de tipo AppState
// Añadimos los reducers correspondientes
export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
};
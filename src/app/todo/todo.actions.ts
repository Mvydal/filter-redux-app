import { Action } from "@ngrx/store";
import { Todo } from "./model/todo.model";

//Lista de acciones - Agregar TODOS

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DESTROY_TODO = '[TODO] Destroy todo';
export const CHECKALL_TODO = '[TODO] CheckAll todo';
export const CLEARCOMPLETE_TODO = '[TODO] Clear complete todo';

export class AddTodoAction implements Action{
    readonly type = ADD_TODO;
    constructor(public text :string){}
}

export class ToggleTodoAction implements Action{
    readonly type = TOGGLE_TODO;
    constructor(public id : number){}
}

export class EditTodoAction implements Action{
    readonly type = EDIT_TODO;
    constructor(public id:number, public text: string){}
}

export class DestroyTodoAction implements Action{
    readonly type = DESTROY_TODO;
    constructor(public id:number){}
}

export class CheckAllTodoAction implements Action{
    readonly type = CHECKALL_TODO;
    constructor(public completed: boolean){}
}

export class ClearCompleteTodoAction implements Action{
    readonly type = CLEARCOMPLETE_TODO;
}

//Tipo de acciones del reducer
export type Actions = AddTodoAction | ToggleTodoAction | EditTodoAction | DestroyTodoAction | CheckAllTodoAction | ClearCompleteTodoAction; 
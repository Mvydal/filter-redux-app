import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filters/filter.actions';
import * as fromTodo from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';


@Component({
    selector: 'app-todo-footer',
    templateUrl: './todo-footer.component.html',
    styles: []
})
export class TodoFooterComponent implements OnInit {
    
    validFilters : fromFilter.validFilters [] = ['all', 'active', 'completed']; 
    actualFilter: fromFilter.validFilters;

    
    itemsLeft:number;

    constructor(private store: Store<AppState>) { }
    
    ngOnInit() {
        //Nos subscribimos al store para saber si los todos han cambiado y para que se actualice el html con el filtro marcado
        this.store.subscribe( state => {
            this.actualFilter = state.filter;
            this.countItemsLeft(state.todos);
        })
    }

    //Cambiamos el valor del filter en el store
    changeFilter(filter: fromFilter.validFilters){
        const action = new fromFilter.SetFilterAction(filter);
        this.store.dispatch(action);
    }

    countItemsLeft(todos: Todo[]){
        this.itemsLeft = todos.filter(todo => !todo.completed).length;
    }

    clearCompleted(){
        const action = new fromTodo.ClearCompleteTodoAction();
        this.store.dispatch(action);
    }
}

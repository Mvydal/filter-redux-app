import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import * as fromFilter from '../../filters/filter.actions';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styles: []
})
export class TodoListComponent implements OnInit {
    
    // Variable donde se guardaran los todos
    todos: Todo[] = [];
    
    filter: fromFilter.validFilters;

    // Añadimos el store
	constructor(private store: Store<AppState>) { }
    
    // Nos suscribimos al store
	ngOnInit() {
        this.store.subscribe( state => {
            this.todos = state.todos;
            this.filter = state.filter;
        });
	}

}

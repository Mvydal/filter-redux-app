import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { CheckAllTodoAction } from './todo.actions';
import { Todo } from './model/todo.model';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styles: []
})
export class TodoComponent implements OnInit {

    completed: boolean = false;

    constructor(private store: Store<AppState>) { 
    }
    
    ngOnInit() {

    }

    checkAll(){
        this.completed = !this.completed;
        const action = new CheckAllTodoAction(this.completed);
        this.store.dispatch(action);
    }
    
    
}

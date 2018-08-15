import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';

//Importamos las acciones
import * as fromTodo from '../todo.actions';

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styles: []
})
export class TodoAddComponent implements OnInit {

    txtInput: FormControl;
    
    //Pasamos el store en el constructor de tipo AppState para manejarlo.
    constructor(private store: Store<AppState>) { }
    
    ngOnInit() {
        //Creamos un form control en principio vacio que sea requerido.
        this.txtInput = new FormControl('', Validators.required);
    }
    
    addTodo(){
        if(this.txtInput.invalid){
            return;
        }

        //Definimos la accion y hacemos el dispatch del store
        const action = new fromTodo.AddTodoAction(this.txtInput.value);
        this.store.dispatch(action);
        this.txtInput.setValue('');
    }
}

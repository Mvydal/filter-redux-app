import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { ToggleTodoAction, EditTodoAction, DestroyTodoAction, CheckAllTodoAction } from '../todo.actions';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styles: []
})
export class TodoItemComponent implements OnInit {

    // Recibimos lista de todo del padre
    @Input() todo: Todo;
    @ViewChild('txtInputEdit') txtInputEdit: ElementRef;

    chkField: FormControl;
    txtInput: FormControl;

    edit: boolean;

    constructor(private store : Store<AppState>) { }
    
    ngOnInit() {
        // Inicializamos el check de los input y los input para editar
        this.chkField = new FormControl( this.todo.completed );
        this.txtInput = new FormControl( this.todo.text, Validators.required );

        // Cada vez que se cambie el check dispara el evento cambiando el estado completado del todo
        this.chkField.valueChanges
            .subscribe(() => {
                const action = new ToggleTodoAction(this.todo.id);
                this.store.dispatch(action);
            }
        );
    }

    editing(){
        this.edit = true;
        
        setTimeout( ()=> {
            this.txtInputEdit.nativeElement.select();
        }, 1);        
    }

    endEditing(){
        this.edit = false;
        if(this.txtInput.invalid){
            return;
        }
        if(this.txtInput.value === this.todo.text){
            return;
        }
        //Para cambiar el valor del input en el store.
        const action = new EditTodoAction(this.todo.id, this.txtInput.value);
        this.store.dispatch(action);
        
    }

    destroy(){
        const action = new DestroyTodoAction(this.todo.id);
        this.store.dispatch(action);
    }
}

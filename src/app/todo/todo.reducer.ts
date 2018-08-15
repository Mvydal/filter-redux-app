// Importamos todas las acciones de todo.actions
import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

//Definimos el estado: Sera un listado de todos.
const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');

todo2.completed = true;

const initialState: Todo[] = [todo1, todo2];

//Funcion reducer
export function todoReducer( state = initialState, action: fromTodo.Actions) :Todo[]{

    switch ( action.type ){

        case fromTodo.ADD_TODO:
            const todo = new Todo( action.text );    
            // No podemos hacer un push directamente. Hay que generar un nuevo estado: para ello se usa ES6 
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            // Usamos la funcion map para generar un nuevo array a partir del anterior 
                // y asi cambiar la propiedad completed de los todos.
            // Esta funcion funciona como un forEach buscando todos los todos del state y busca entre todos los ids,
                // el que coincida con la accion
            return state.map( todoEdit => {
                if(todoEdit.id === action.id){
                    //Se tiene que retornar un nuevo objeto de tipo todo.
                    return{ 
                        // clonamos el objeto de tipo todo y le cambiamos solo la propiedad que necesitamos
                        ...todoEdit,
                        completed : !todoEdit.completed
                    };
                }else{
                    //Si no es el mismo, se retorna el mismo elemento porque no va a cambiar.
                    return todoEdit;
                }
            })
        
        case fromTodo.EDIT_TODO:
            return state.map ( todoEdit =>{
                if(todoEdit.id === action.id){
                    return{
                        ...todoEdit,
                        text : action.text
                    };
                }else{
                    return todoEdit;
                }
            })

        case fromTodo.DESTROY_TODO:
            // Generar un nuevo array quitando el todo seleccionado:
            // Hace un foreach buscando la condicion de parentesis 
            return state.filter( todoEdit => todoEdit.id !== action.id);

        case fromTodo.CHECKALL_TODO:
            return state.map( todoEdit => {
                return {
                    ...todoEdit,
                    completed: action.completed
                }
            });

        case fromTodo.CLEARCOMPLETE_TODO:
            return state.filter( todoEdit => !todoEdit.completed);
        
        default:
            return state;
    }
}
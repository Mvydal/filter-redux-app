import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilter from './filter.actions';
import { validFilters } from './filter.actions';

@Pipe({
    name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

    transform(todos: Todo[], filter: fromFilter.validFilters): Todo[] {
        
        switch (filter){
            case 'completed':
                return todos.filter(todo => todo.completed);
            case 'active':
                return todos.filter(todo => !todo.completed);
            default:
                return todos;
        }
    }

}

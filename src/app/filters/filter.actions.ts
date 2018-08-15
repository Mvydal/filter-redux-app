import { Action } from '@ngrx/store';


export const SET_FILTER = '[FILTER] Set filter';

export type validFilters = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action{
    readonly type = SET_FILTER;
    
    constructor(public nameFilter:validFilters){}
}


export type actions = SetFilterAction;
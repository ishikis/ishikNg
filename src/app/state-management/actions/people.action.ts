import { createAction, props } from '@ngrx/store';
import { People } from '../../models/people';

export const addPeople = createAction('[ADD PEOPLE]', props<People>());

export const editPeople = createAction('[EDIT PEOPLE]', props<People>());

export const removePeople = createAction('[REMOVE PEOPLE]', props<People>());

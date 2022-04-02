import { createReducer, on } from '@ngrx/store';
import { People } from '../../models/people';
import { addPeople, editPeople, removePeople } from '../actions/people.action';

//State Type
export interface IState {
  data: People[];
}

// //Initial State
export const initialPeopleState: IState = {
  data: [
    { id: 1, name: 'Mehmet', surname: 'ÇETİN', job: 'Mühendis', gender: 'male' },
    { id: 2, name: 'Züleyha', surname: 'YILDIRIM', job: 'Öğretmen', gender: 'female' },
    { id: 3, name: 'Ahmet', surname: 'BAŞ', job: 'Doktor', gender: 'male' },
    { id: 4, name: 'Tuğçe', surname: 'TEKİN', job: 'Hemşire', gender: 'male' },
  ],
};


//Reducer
export const peopleReducer = createReducer(
  initialPeopleState,
  on(addPeople, (state, people) => {
    let newId = Math.max(...state.data.map(post => post.id)) + 1;
    let peopleWidthId = JSON.parse(JSON.stringify(people));
    peopleWidthId.id = newId;

    let newState: IState = {
      data: [...state.data, peopleWidthId],
    };

    return newState;
  }),

  on(editPeople, (state, people) => {
    let oldPeople = state.data.find((l) => l.id == people.id);
    let index = state.data.indexOf(oldPeople);
    let newState: IState = {
      data: [...state.data],
    };
    newState.data[index] = people;
    return newState;
  }),

  on(removePeople, (state, people) => {
    let deletePeople = state.data.find((l) => l.id == people.id);
    let deletePeopleIndexNo = state.data.indexOf(deletePeople);
    let newState: IState = {
      data: [...state.data],
    };
    newState.data.splice(deletePeopleIndexNo, 1);
    return newState;
  })
);

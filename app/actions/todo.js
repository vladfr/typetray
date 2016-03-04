import { createAction } from 'redux-actions';

let nextTodoId = 0

export const addTodo = createAction('ADD_TODO', 
  (text) => { return {
    id: nextTodoId++,
    text
  }
});
export const setVisibilityFilter = createAction('SET_VISIBILITY_FILTER');
export const toggleTodo = createAction('TOGGLE_TODO');
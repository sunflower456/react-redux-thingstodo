import * as types from '../actions/ActionTypes';
const initialState = {
  id:3,
  input : '',
  todos : [
    {
      id : 0,
      text : 'React Study',
      checked : false
    },
    {
      id : 1,
      text : 'Spring Study',
      checked : true
    },
    {
      id : 2,
      text : 'Redux Study',
      checked : false
    }
  ]
}
export default function todo(state = initialState, action) {
    switch(action.type) {
        case types.CREATE :
            return {
                todos : state.todos.concat({
                  id : state.id++,
                  text : state.input,
                  checked : false 
                }),
                input : ''
            }
        case types.CHANGE : 
            return {
              ...state,
              input : action.e.target.value
            }
        case types.REMOVE :
            return {
              ...state,
              todos : state.todos.filter(todo => todo.id !== action.id)
            }
        case types.TOGGLE :
            const index = state.todos.findIndex(todo => todo.id === action.id);
            const selected = state.todos[index];
            const nextTodos = [...state.todos];
            nextTodos[index] = {
              ...selected,
              checked : !selected.checked
            };
            return {
              ...state,
              todos:nextTodos
            }
        default :
            return state;    
    }
}
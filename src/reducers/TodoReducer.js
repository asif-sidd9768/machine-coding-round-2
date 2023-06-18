export const initialStateTodo = {
  todos: [],
}

export const todoReducer = (state, action) => {
  switch(action.type){
    case "SET_TODOS": 
      return {...state, todos: action.payload}
    case "DELETE_TODO":{
      const updatedTodosAfterDelete = state.todos.filter(({id}) => id !== action.payload)
      return {...state, todos: updatedTodosAfterDelete}
    }
    case "ADD_TODO": {
      return {...state, todos: [...state.todos, action.payload]}
    }
    case "EDIT_TODO": {
      const updatedTodosAfterEdit = state.todos.map(todo => todo.id === action.payload.id ? {...action.payload} : todo)
      return {...state, todos: updatedTodosAfterEdit}
    }
    case "ARCHIVE_TODO":{
      const updatedTodosAfterArchive = state.todos.map(todo => todo.id === action.payload ? {...todo, archive: !todo.archive} : todo)
      return {...state, todos: updatedTodosAfterArchive}
    }      
  }
}
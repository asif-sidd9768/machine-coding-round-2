export const setTodosAction = (todosData) => ({
  type:"SET_TODOS",
  payload: todosData
})

export const deleteTodosAction = (todoId) => ({
  type:"DELETE_TODO",
  payload: todoId
})

export const addTodoAction = (todoData) => ({
  type:"ADD_TODO",
  payload: todoData
})

export const editTodoAction = (todoData) => ({
  type:"EDIT_TODO",
  payload: todoData
})

export const archiveTodoAction = (todoId) => ({
  type:"ARCHIVE_TODO",
  payload: todoId
})
import { createContext, useEffect, useReducer } from "react";
import { initialStateTodo, todoReducer } from "../reducers/TodoReducer";
import { setTodosAction } from "../actions/todoActions";
import { TODOS } from "../db/todoData";

export const TodoContext = createContext()
export const TodoProvider = ({children}) => {
  const [todoState, todoDispatch] = useReducer(todoReducer, initialStateTodo)

  useEffect(() => {
    todoDispatch(setTodosAction(TODOS))
  }, [])
  return (
    <TodoContext.Provider value={{todoState, todoDispatch}}>
      {children}
    </TodoContext.Provider>
  )
}
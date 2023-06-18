import { useContext } from "react"
import { TodoContext } from "../../main"
import { TodoCard } from "../../components/TodoCard/TodoCard"

import "./ArchivePage.css"

export const ArchivePage = () => {
  const {todoState} = useContext(TodoContext)
  const archivedTodos = todoState.todos.filter(({archive}) => archive)

  if(archivedTodos.length < 1){
    return <div className="archive-page-empty-container">
      <p>Nothing to show!</p>
      <p>Add some items!</p>
    </div>
  }
  return (
    <div className="todos-container">
    {
      archivedTodos.map(todo => 
        <TodoCard key={todo.id} {...todo} />
      )
    }    
    </div>
  )
}
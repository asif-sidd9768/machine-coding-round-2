import { useContext, useState } from "react"
import { TodoContext } from "../../main"

import "./HomePage.css"
import { TodoCard } from "../../components/TodoCard/TodoCard"
import { TodoPopup } from "../../components/TodoPopup/TodoPopup"

export const HomePage = () => {
  const {todoState} = useContext(TodoContext)
  const [showPopup, setShowPopup] = useState(false)

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const filteredTodos = todoState?.todos.filter(({archive}) => !archive)
  return (
    <div className="todos-container">
      <div className="add-new-container" onClick={togglePopup}>
        <p>Add new</p>
      </div>
    {
      filteredTodos.map(todo => 
        <TodoCard key={todo.id} {...todo} />
      )
    }    
    {
      showPopup && <TodoPopup togglePopup={togglePopup} />
    }
    </div>
  )
}
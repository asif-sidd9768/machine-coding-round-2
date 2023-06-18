import { useContext, useState } from "react"

import { TodoContext } from "../../main"
import { archiveTodoAction, deleteTodosAction } from "../../actions/todoActions"
import { TodoPopup } from "../TodoPopup/TodoPopup"

import todoBg from "../../assets/images/bg-card.jpg"
import "./TodoCard.css"
import { useLocation } from "react-router-dom"

export const TodoCard = (todo, ) => {
  const {todoDispatch} = useContext(TodoContext)
  const [showPopup, setShowPopup] = useState(false)
  const [showDetail, setShowDetail] = useState(false)
  const location = useLocation()

  const handleTodoDelete = () => {
    todoDispatch(deleteTodosAction(todo.id))
  }

  const handleTodoArchive = () => {
    todoDispatch(archiveTodoAction(todo.id))
  }

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  const toggleTodoShow = () => {
    setShowDetail(!showDetail)
  }

  return (
    <div className="todo-card-main">
      <div className="todo-card-container">
        <div className="todo-card-header-container">
          <img src={todoBg} className="todo-card-bg" />
          <p className="todo-card-name">{todo.name}</p>
        </div>
        {showDetail ? <div className="todocard-text-container" onClick={toggleTodoShow}>
          <p className="todocard-text">Will do <span className="todo-card-text-main">{todo.repeat}</span> - <span className="todo-card-text-main">{todo.goal}</span></p>
          <p className="todocard-text">At <span className="todo-card-text-main">{todo.timeOfDay}</span></p>
          <p className="todocard-text">Starting from <span className="todo-card-text-main">{todo.startDate}</span></p>
        </div> : <p className="todo-card-reveal-text" onClick={toggleTodoShow}>Tap to reveal...</p>}
        {
          showPopup && <TodoPopup togglePopup={togglePopup} todo={todo} />
        }
      </div>
      <div className="todo-card-btns">
        <button className="todo-card-edit-btn" onClick={togglePopup}>Edit</button>
        <button className="todo-card-delete-btn" onClick={handleTodoDelete}>Delete</button>
        <button className="todo-card-archive-btn" onClick={handleTodoArchive}>{location.pathname === "/archive" ? "Unarchive" : "Archive"}</button>
      </div>
    </div>
  )
}
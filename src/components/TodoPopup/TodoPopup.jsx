import { useContext } from "react"
import "./TodoPopup.css"
import { TodoContext } from "../../main"
import { addTodoAction, editTodoAction } from "../../actions/todoActions"

export const TodoPopup = ({togglePopup, todo}) => {
  const {todoDispatch} = useContext(TodoContext)
  const isEditing = !!todo

  const handleHabitSave = (event) => { 
    event.preventDefault()
    const habit = {
      id: isEditing ? todo.id : 120,
      name: event.target[0].value, 
      repeat: event.target[1].value, 
      goal: event.target[2].value, 
      timeOfDay: event.target[3].value, 
      startDate: event.target[4].value, 
      completed: isEditing ? todo.completed: false,
      archive: isEditing ? todo.archive : false 
    }
    if(isEditing){
      todoDispatch(editTodoAction(habit))
    }else {
      todoDispatch(addTodoAction(habit))
    }
    togglePopup()
  }
  return (
    <div className="todo-popup-container">
      <div className="todo-popup-content">
        <form onSubmit={handleHabitSave}>
          <p className="popup-title">New Habit</p>
          <div>
            <p className="popup-label mandatory">NAME</p>
            <input 
              className="popup-input" 
              placeholder="Name your habit"  
              defaultValue={isEditing ? todo.name : ""} 
              required/>
          </div>
          <div className="popup-field-container">
            <div>
              <p className="popup-label">REPEAT</p>
              <select className="popup-input" defaultValue={isEditing ? todo.repeat : ""} >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <p className="popup-label">GOAL</p>
              <select className="popup-input" defaultValue={isEditing ? todo.goal : ""} >
                <option>1 Times Daily</option>
                <option>2 Times Daily</option>
                <option>3 Times Daily</option>
              </select>
            </div>
          </div>
          <div className="popup-field-container">
            <div>
              <p className="popup-label" defaultValue={isEditing ? todo.timeOfDay : ""} >TIME OF DAY</p>
              <select className="popup-input">
                <option>Any Time</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>
            <div>
              <p className="popup-label">START DATE</p>
              <select className="popup-input" defaultValue={isEditing ? todo.startDate : ""} >
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Day After Tomorrow</option>
              </select>
            </div>
          </div>
          <div className="popup-btns">
            <span onClick={() => togglePopup()}>Discard</span>
            <button>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
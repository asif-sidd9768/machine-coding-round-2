import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App.jsx'
import { TodoContext, TodoProvider } from './contexts/TodoContext.jsx'

import './index.css'

export {TodoContext}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoProvider>
      <Router>
        <App />
      </Router>
    </TodoProvider>
  </React.StrictMode>,
)

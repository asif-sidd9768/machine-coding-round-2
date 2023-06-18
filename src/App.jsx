import { Routes, Route } from "react-router-dom"

import { HomePage } from './pages/HomePage/HomePage'

import './App.css'
import { ArchivePage } from "./pages/ArchivePage/ArchivePage"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </div>
  )
}

export default App

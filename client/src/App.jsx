import { useState } from 'react'
import './App.css'
import {Navbar, Form, Movies} from './components'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-zinc-900">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='/addMovie' element={<Form />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

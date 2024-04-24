import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Coindetails from './pages/Coindetails'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:id' element={<Coindetails />} />
      </Routes>
    </Router>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header.component'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header props={
            {
              title: 'Campaign',
              button: '+ Create Campaign',
              redirectUrl: '/about'
            }          
          }/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

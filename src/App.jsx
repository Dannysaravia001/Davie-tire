import { useState } from 'react'
import './App.css'
import image from './components/davie.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header className="header">
          <img src={image} alt="Davie Tire Shop" />
        </header>
        <h1>Hello World</h1>
        <h2>Danny's Bognos</h2>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in
           voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est laborum</h1>
      </div>
    </>
  )
}

export default App

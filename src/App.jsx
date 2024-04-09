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
        
        
      </div>
    </>
  )
}

export default App

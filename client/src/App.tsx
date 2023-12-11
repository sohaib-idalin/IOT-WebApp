import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <h1>Vite + React</h1>
      <div className="p-5 bg-blue-800 rounded-full">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </div>
  )
}

export default App

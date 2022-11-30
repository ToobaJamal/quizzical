import { useState } from 'react'
import Home from './components/Home'

function App() {
  const [start, setStart] = useState(false)

  function toggleStart() {
    setStart(prevStart => !prevStart)
    console.log(start)
  }

  return(
    <div>
      <Home toggleStart={toggleStart}/>
    </div>
  )

  
}

export default App

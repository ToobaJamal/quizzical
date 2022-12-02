import { useState } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'



function App() {
  const [start, setStart] = useState(false)

  function toggleStart() {
    setStart(prevStart => !prevStart)
  }

  console.log(start)


  return(
    <div className='parent'>
      {start ? <Quiz start={start}/> : <Home toggleStart={toggleStart}/>}  
    </div>
  )

  
}

export default App

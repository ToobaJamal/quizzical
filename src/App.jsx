import { useState, useContext } from 'react'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Scores from './components/Scores'
import {
  Route,
  Routes
} from "react-router-dom"
import { Context } from './Context'


function App() {
  const [start, setStart] = useState(false)
  const {showScore} = useContext(Context)
  function toggleStart() {
    setStart(prevStart => !prevStart)
  }
  
  return(
   <Routes>
      start ? 
      <Route exact path="/quiz" element={ ( <Quiz start={start}/>) }/> : 
      <Route path="/"  element={ (<Home toggleStart={toggleStart}/>) }
      />
      showScore && <Route path='/score' element={<Scores scoreList={JSON.parse(localStorage.getItem("scores"))}/>}/>
    </Routes>
  )

  
}

export default App

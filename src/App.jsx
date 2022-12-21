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
  console.log(showScore)
  return(
   <Routes>
      start ? 
      <Route exact path="/quiz" element={ ( <Quiz start={start}/>) }/> : 
      <Route path="/"  element={ (<Home toggleStart={toggleStart}/>) }
      />

      showScore && <Route path='/score' element={<Scores scoreList={JSON.parse(localStorage.getItem("scores"))}/>}/>
    {/* <Route exact path="/"  element={ ( <Home toggleStart={toggleStart}/>) }/> */}
    {/* {start && <Route path="/quiz"  element={ ( <Quiz start={start}/>) }/>} */}
    {/* <Route exact path="/" element={ start ? ( <Quiz start={start}/>) : (<Home toggleStart={toggleStart}/>)} /> */}
    {/* {start ? <Quiz start={start}/> : <Home toggleStart={toggleStart}/>}   */}
    </Routes>
  )

  
}

export default App

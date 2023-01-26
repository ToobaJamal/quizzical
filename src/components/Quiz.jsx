import React, {useContext} from 'react'
import {
    Route,
    Routes,
    Link
  } from "react-router-dom"
import {nanoid} from "nanoid"
import Quizcard from './Quizcard'
import Scores from './Scores'
import { Context } from '../Context'

export default function Quiz(props) {
    const {displayScore} = useContext(Context)
    const [questions, setQuestions] = React.useState(null)
    const [checked, setChecked] = React.useState(false)
    const [correct, setCorrect] = React.useState(0)
    const [count, setCount] = React.useState(0)
    const [showScore, setShowScore] = React.useState(false)
    function shuffleAnswers(ans) {
        return ans.sort(() => Math.random() - 0.5)
    }
    const scores = JSON.parse(localStorage.getItem("scores"))
    if(!localStorage.length) {
        localStorage.setItem("scores", JSON.stringify([]))
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => {
                let q = []
                data.results.forEach(question => {
                    q.push({id: nanoid(), question: question.question, options: shuffleAnswers([...question.incorrect_answers, question.correct_answer]), checked: false, selected: "", correct: question.correct_answer})
                })
                setQuestions(q)
            })
    }, [count])
    
    function checkScore() {
        let selected = true
        setQuestions(questions => questions.map(question => {
      
            return {...question, checked:true}
          }))
          setChecked(true)
          let correct = 0
          questions.forEach(question =>{
            if (question.correct === question.selected){
              correct += 1
            }
          })
          setCorrect(correct)
          let scoresArray = JSON.parse(localStorage.getItem("scores"))
          scoresArray.unshift({date: new Date().toLocaleDateString(), score: correct})
          console.log(scoresArray)
          localStorage.setItem("scores", JSON.stringify(scoresArray))
        }

    function handleAnswer(id, answer) {
        setQuestions(questions => questions.map(question =>{
            return question.id === id ? {...question, selected: answer} : question
          }))
    }

    function playAgain() {
        setCount(count => count + 1)
        setChecked(false)
    }

    function showScores() {
        setShowScore(true)
    }

    const quizElements = questions ? questions.map(q => {
        return (
            <Quizcard key={q.id}
            q={q}
            handleAnswer={handleAnswer}
            id={q.id}/>
        )
    }) : []


    return(
        <div className='quiz'>
            {quizElements}
            {checked && <span className='score'>You scored {correct}/5 correct answers</span>}
            <div className='score-check-parent'>
            {scores.length > 0 && <Link to="/score"><button className="score-history" onClick={displayScore}>Score History</button></Link>}
            <button className='check-ans' onClick={checked ? playAgain : checkScore}>{checked ? 'Play Again' : 'Check Answer'}</button>
            </div>
         </div>
) 
}


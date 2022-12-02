import { nanoid } from "nanoid"
import {decode} from 'html-entities'
export default function Quizcard(props) {

    let answers = props.q.options
    function handleClick(answer){
        if (props.q.checked){
          return
        }
        props.handleAnswer(props.id, answer)
      }

      const answersElement = answers.map(answer =>{
        let id = null
        if (props.q.checked){
            if (props.q.correct === answer){
              id = 'correct'
            }
            else if(props.q.selected === answer){
              id = 'incorrect'
            }
            else{
              id = nanoid()
            }
          }
        return (
            <button key={nanoid()} id={id} className={answer === props.q.selected ? 'btn-active' : 'btn-inactive'} onClick={() => handleClick(answer)}>{decode(answer)}</button>
        )
      })
    return(
        <div className="quiz-card">
            <p className='question-title'>{decode(props.q.question)}</p>
            <div className="opt-parent">
                {answersElement}
            </div>
            <div className='line'></div>
        </div>
    )
}


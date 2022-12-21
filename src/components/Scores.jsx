import { nanoid } from "nanoid"
import { useNavigate } from "react-router-dom"

export default function Scores(props) {
    const navigate = useNavigate()
    const scores = props.scoreList.map(score => {
        return (
            <div key={nanoid()} className="score-card">
                <p>{score.date}</p>
                <p>{score.score}/5</p>
            </div>
        )
    })

    return(
        <div className="score-hist-parent">
            <h1 className="score-hist">Score history</h1>
            {scores}
            <button className="btn-go-back" onClick={() => navigate(-1)}>Go back</button>
        </div>
    )
}

 
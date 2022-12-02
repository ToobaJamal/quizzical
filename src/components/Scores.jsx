export default function Scores(props) {

    const scores = props.scoreList.map(score => {
        return (
            <div className="score-card">
                <p>{score.date}</p>
                <p>{score.score}/5</p>
            </div>
        )
    })

    return(
        <div className="score-hist-parent">
            <h1 className="score-hist">Score history</h1>
            {scores}
        </div>
    )
}


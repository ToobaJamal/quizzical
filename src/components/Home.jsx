export default function Home(props) {
    return(
        <div>
            <h1>Quizzical</h1>
            <button onClick={props.toggleStart}>Start Quiz</button>
        </div>
    )
}


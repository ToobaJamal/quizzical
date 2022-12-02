export default function Home(props) {
    return(
        <div className="home-screen">
            <h1 className="quizzical">Quizzical</h1>
            <p className="desc">A fun quiz game</p>
            <button className="btn-start" onClick={props.toggleStart}>Start Quiz</button>
        </div>
    )
}


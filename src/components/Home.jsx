import {Link} from "react-router-dom"

export default function Home(props) {
    
    return(
        <div className="home-screen">
            <h1 className="quizzical">Quizzical</h1>
            <p className="desc">A fun quiz game</p>
            <Link to="/quiz"><button className="btn-start" onClick={props.toggleStart}>Start Quiz</button></Link>
        </div>
    )
}


import React, {useState} from "react"
const Context = React.createContext()

function ContextProvider(props) {
    const [showScore, setShowScore] = useState(false)

    function displayScore() {
        setShowScore(true)
    }

    return (
        <Context.Provider value={{showScore, displayScore}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
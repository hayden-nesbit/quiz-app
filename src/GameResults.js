import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


function GameResults(props) {

    function resetGame() {
        props.setGame(false)
        props.setScore(0)
    }

    let showScore = ((props.score / props.amount) * 100).toFixed(0)

    let filterResults = props.quiz.filter(item => item.status === "incorrect")
    let showResults = filterResults.map((item, index) => {
        return (
            <div key={index} className="container mb-5 text-left" style={{ width: '18rem;' }}>
                <ul className="list-unstyled">
                    <li className="text-white bg-dark"><b>
                        {item.question.replace(/(&quot\;)/g, "\"")
                            .replace(/(&amp\;)/g, "\&")
                            .replace(/(&#039\;)/g, "\'")
                            .replace(/(&eacute\;)/g, "\é")
                            .replace(/(&aacute\;)/g, "\á")
                            .replace(/(&oacute\;)/g, "\ó")}
                    </b></li>
                    <li className="text-danger bg-dark">Your answer:
                    {item.your_answer.replace(/(&quot\;)/g, "\"")
                            .replace(/(&amp\;)/g, "\&")
                            .replace(/(&#039\;)/g, "\'")
                            .replace(/(&eacute\;)/g, "\é")
                            .replace(/(&aacute\;)/g, "\á")}
                            .replace(/(&oacute\;)/g, "\ó")}}
                    </li>
                    <li className="text-success bg-dark">Correct answer:
                    {item.correct_answer.replace(/(&quot\;)/g, "\"")
                            .replace(/(&amp\;)/g, "\&")
                            .replace(/(&#039\;)/g, "\'")
                            .replace(/(&eacute\;)/g, "\é")
                            .replace(/(&aacute\;)/g, "\á")
                            .replace(/(&oacute\;)/g, "\ó")}
                    </li>
                </ul>
            </div>
        )
    })

    return (

        <div className="text-center text-white">
            {/* <h1>Game over</h1> */}
            <h5 className="text-secondary">Score:</h5>
            <h1 className="display-1 text-warning">{showScore}%</h1>
            {showResults}
            <Button size="sm" color="primary" onClick={resetGame}>Play again</Button>
        </div>

    )
}
export default GameResults

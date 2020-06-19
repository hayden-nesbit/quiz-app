import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

function Navbar(props) {

    function resetGame() {
        props.setGame(false)
        props.setScore(0)
    }

    let showScore = ((props.score / props.amount) * 100).toFixed(0)

    console.log(props.game)
    return (
        <nav className="navbar navbar-light bg-dark sticky-top">
            <span className="navbar-brand mb-0 h1 text-white"><FontAwesomeIcon className="text-warning mr-2" size="lg" icon={faSmileBeam} />Quizzie</span>
            {props.game === true ?
                <div className="form-inline text-right">
                    <h4 className="text-warning mt-0 mb-0 mr-3">{showScore}%</h4>
                    <span onClick={resetGame}><FontAwesomeIcon className="text-secondary" icon={faUndoAlt} /></span>
                </div>
                :
                null
            }
        </nav>
    )
}
export default Navbar

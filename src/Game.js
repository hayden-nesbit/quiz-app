import React, { useState } from 'react'
import axios from 'axios'
import QuizForm from './QuizForm'
import QuizQuestions from './QuizQuestions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import './Game.css'



function Game() {

    const [amount, setAmount] = useState("10");
    const [category, setCategory] = useState("0");
    const [difficulty, setDifficulty] = useState("0");
    const [type, setType] = useState("0");
    const [quiz, setQuiz] = useState([])
    const [game, setGame] = useState(false)
    const [score, setScore] = useState(0)

    async function getQuestions() {
        await axios.get("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
            .then(response => {
                console.log(response.data.results);

                function getRandomInd(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }

                response.data.results.map((item) => {
                    let ind = item.type === "boolean" && item.correct_answer === "True" ? 0 : item.type === "boolean" && item.correct_answer === "False" ? 1 : getRandomInd(3)
                    return (
                        item.incorrect_answers.splice(ind, 0, item.correct_answer)
                    )
                })

                setQuiz(response.data.results)

            })
            .catch(error => {
                console.log(error);
            });

        setGame(true)
    }

    let showScore = ((score / amount) * 100).toFixed(0)

    return (
        <>
            <nav className="navbar navbar-light bg-dark sticky-top">
                <span className="navbar-brand mb-0 h1 text-white"><FontAwesomeIcon className="text-warning mr-2" size="lg" icon={faSmileBeam} />Quizzie</span>
                {game === true ?
                    <span onClick={() => setGame(false)}><FontAwesomeIcon className="text-secondary" icon={faUndoAlt} /></span>
                    :
                    null
                }
            </nav>
            <div className="container mt-4">
                {game === false ?
                    <QuizForm
                        amount={amount}
                        setAmount={setAmount}
                        category={category}
                        setCategory={setCategory}
                        difficulty={difficulty}
                        setDifficulty={setDifficulty}
                        type={type}
                        setType={setType}
                        getQuestions={getQuestions}
                    />
                    :
                    <>
                        <div className="score mt-4">
                            <h6 className="mb-0 text-center text-white">Score:</h6>
                            <h4 className="text-success mt-0 mb-0 text-center">{showScore}%</h4>
                        </div>
                        <QuizQuestions
                            quiz={quiz}
                            setQuiz={setQuiz}
                            score={score}
                            setScore={setScore}
                        />
                    </>
                }
            </div>
        </>
    )
}
export default Game;

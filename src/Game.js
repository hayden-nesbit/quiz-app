import React, { useState } from 'react'
import axios from 'axios'
import QuizForm from './QuizForm'
import QuizQuestions from './QuizQuestions'

function Game() {

    const [amount, setAmount] = useState("10");
    const [category, setCategory] = useState("0");
    const [difficulty, setDifficulty] = useState("0");
    const [type, setType] = useState("0");
    const [quiz, setQuiz] = useState([])
    const [game, setGame] = useState(false)

    async function getQuestions() {
        await axios.get("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
            .then(response => {
                console.log(response.data.results);
                setQuiz(response.data.results)
            })
            .catch(error => {
                console.log(error);
            });

        setGame(true)
    }

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Trivia Quiz</span>
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
            <QuizQuestions 
                quiz={quiz}
            />
            }
            </div>
        </>
    )
}
export default Game;

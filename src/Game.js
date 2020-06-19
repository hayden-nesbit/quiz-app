import React, { useState } from 'react'
import axios from 'axios'
import QuizForm from './QuizForm'
import QuizQuestions from './QuizQuestions'
import './Game.css'
import GameResults from './GameResults'
import Navbar from './Navbar'



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
                console.log(response.data.results)

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


    return (
        <>
            <Navbar 
                setGame={setGame}
                game={game}
                amount={amount}
                score={score}
                setScore={setScore}
            />
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
                    : game === true ?
                        <QuizQuestions
                            quiz={quiz}
                            setQuiz={setQuiz}
                            score={score}
                            setScore={setScore}
                            setGame={setGame}
                        />
                        : game === "over" ?
                            <GameResults 
                                score={score}
                                setScore={setScore}
                                setGame={setGame}
                                amount={amount}
                                quiz={quiz}
                            />
                            :
                            null
                }
            </div>
        </>
    )
}
export default Game;

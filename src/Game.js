import React, { useState } from 'react'
import axios from 'axios'
import TopNav from './TopNav'
import QuizForm from './QuizForm'

function Game() {

    const [amount, setAmount] = useState("10");
    const [category, setCategory] = useState("0");
    const [difficulty, setDifficulty] = useState("0");
    const [type, setType] = useState("0");

    async function getQuestions() {
        await axios.get("https://opentdb.com/api.php?amount=" + amount + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <>
            <TopNav />
            <div className="container mt-5">
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
            </div>
        </>
    )
}
export default Game;

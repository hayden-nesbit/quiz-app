import React, { useState } from 'react'

function QuizQuestions(props) {

    function getRandomInd(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let correctCount = 0


    let showQuiz = props.quiz.map((item, index) => {
        let ind = item.type === "boolean" && item.correct_answer === "True" ? 0 : item.type === "boolean" && item.correct_answer === "False" ? 1 : getRandomInd(3)
        let answers = item.incorrect_answers.splice(ind, 0, item.correct_answer)
        return (
            <div key={index} className="card mb-5 border-0">
                <div className="card-header border-0">
                    <small className="text-muted">Category: {item.category}</small>
                    <h5>{item.question}</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {item.incorrect_answers.map((answer, index) => {
                            return (
                                <div className="col-12">
                                    <div key={index} className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            {answer}
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>

                <div className="row">
                    <div className="col-4 offset-4">
                        <button className="btn btn-success btn-sm text-center">Answer</button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div >
            {/* <h3 className="text-right mb-4">Score: 100%</h3> */}
            {/* <div id="gameScroll" className=""> */}
            {showQuiz}
        </div>


    )
}
export default QuizQuestions;

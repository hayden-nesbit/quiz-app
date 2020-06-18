import React, { useState } from 'react'

function QuizQuestions(props) {

    const [choice, setChoice] = useState("")
    const [option, setOption] = useState(-1)

    console.log(option)

    function handleChange(answer, jnd) {
        setChoice(answer)
        setOption(jnd)
    }

   function handleSubmit(ind) {
        
        if (props.quiz[ind].correct_answer === choice) {

            let yNotes = ["Nice!", "Soo smart.", "Lil smartie pants!", "Brilliant.", "You're on a roll!", "Good work.", "Lucky guess."]
            let yNote = yNotes[Math.floor(Math.random() * yNotes.length)];

            props.quiz[ind].status = "correct"
            props.quiz[ind].note = yNote

            props.setScore(props.score + 1)

        } else if (props.quiz[ind].correct_answer !== choice) {

            let nNotes = ["Nice try!", "Newp.", "Wrongo!", "Close, but no.", "Whoops!", "Sorry, bud.", "Ouch."]
            let nNote = nNotes[Math.floor(Math.random() * nNotes.length)];

            props.quiz[ind].status = "incorrect"
            props.quiz[ind].note = nNote
        }
    }


    let showQuiz = props.quiz.map((item, i) => {

        return (

            <div key={i} className="card mb-5 border-0">
                <div className="card-header border-0">
                    <small className="text-muted">Category: {item.category}</small>
                    <h5>{item.question}</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {item.incorrect_answers.map((answer, j) => {
                            return (
                                <div className="col-12">
                                    <div key={j} className="form-check">
                                        <input onChange={(e) => handleChange(e.target.value, j)} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value={answer} />
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
                        {props.quiz[i].note ?
                            <h4 className={props.quiz[i].status === "correct" ? "text-success" : "text-danger"}>{props.quiz[i].note}</h4>
                            :
                            <button onClick={() => handleSubmit(i)} className="btn btn-success btn-sm text-center">Answer</button>
                        }
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

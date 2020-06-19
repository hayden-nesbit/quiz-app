import React, { useState } from 'react'

function QuizQuestions(props) {

    const [clickCount, setClickCount] = useState(0)

    if (clickCount === props.quiz.length) {
        props.setGame("over")
    }

    function handleSubmit(answer, i, j) {

        setClickCount(clickCount + 1)

        let tmpQuiz = [...props.quiz]

        if (props.quiz[i].correct_answer === answer) {

            let yNotes = ["Nice!", "Soo smart.", "Lil smartie pants!", "Brilliant.", "You're on a roll!", "Good work.", "Lucky guess."]
            let yNote = yNotes[Math.floor(Math.random() * yNotes.length)];

            props.quiz[i].status = "correct"
            props.quiz[i].note = yNote
            props.quiz[i].your_answer = answer
            props.quiz[i].bg = "text-white col rounded bg-success mb-2"
            props.quiz[i].option = j

            props.setScore(props.score + 1)

        } else if (props.quiz[i].correct_answer !== answer) {

            let nNotes = ["Nice try!", "Newp.", "Wrongo!", "Close, but no.", "Whoops!", "Sorry, bud.", "Ouch."]
            let nNote = nNotes[Math.floor(Math.random() * nNotes.length)];

            props.quiz[i].status = "incorrect"
            props.quiz[i].note = nNote
            props.quiz[i].your_answer = answer
            props.quiz[i].bg = "text-white col rounded bg-danger mb-2"
            props.quiz[i].option = j

        }

        props.setQuiz(tmpQuiz)
    }


    let showQuiz = props.quiz.map((item, i) => {

        return (
            <>
                <div key={i} className="card mb-5 border-0">
                    <div className="container bg-dark">
                        <small className="text-secondary">Category: {item.category}</small>
                        <h5 className="text-white">
                            {item.question.replace(/(&quot\;)/g, "\"")
                                .replace(/(&amp\;)/g, "\&")
                                .replace(/(&#039\;)/g, "\'")
                                .replace(/(&eacute\;)/g, "\é")
                                .replace(/(&aacute\;)/g, "\á")
                                .replace(/(&oacute\;)/g, "\ó")}
                        </h5>
                    </div>
                    <div className="card-body bg-dark">
                        {item.incorrect_answers.map((answer, j) => {
                            return (
                                <div key={j} className="row mb-0">
                                    <div className={props.quiz[i].bg && props.quiz[i].option === j ? props.quiz[i].bg : "col rounded bg-light mb-2"}>
                                        {props.quiz[i].your_answer ?
                                            <div className="text-center p-2">
                                                {answer.replace(/(&quot\;)/g, "\"")
                                                    .replace(/(&amp\;)/g, "\&")
                                                    .replace(/(&#039\;)/g, "\'")
                                                    .replace(/(&eacute\;)/g, "\é")
                                                    .replace(/(&aacute\;)/g, "\á")
                                                    .replace(/(&oacute\;)/g, "\ó")}
                                            </div>
                                            :
                                            <div onClick={() => handleSubmit(answer, i, j)} className="text-center p-2">
                                                {answer.replace(/(&quot\;)/g, "\"")
                                                    .replace(/(&amp\;)/g, "\&")
                                                    .replace(/(&#039\;)/g, "\'")
                                                    .replace(/(&eacute\;)/g, "\é")
                                                    .replace(/(&aacute\;)/g, "\á")
                                                    .replace(/(&oacute\;)/g, "\ó")}
                                            </div>
                                        }
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </>
        )
    })

    return (
        <>
            {showQuiz}
        </>


    )
}
export default QuizQuestions;

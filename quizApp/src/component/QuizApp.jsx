
import { useState } from "react";


import Logo from "../assets/image/Logo";

const QuizApp = () => {
    const svg = `
    <svg width="750" height="157" viewBox="0 0 750 157" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M496.818 29C507.864 29 516.818 20.0457 516.818 9C516.818 -2.0457 507.864 -11 496.818 -11C485.772 -11 476.818 -2.0457 476.818 9C476.818 20.0457 485.772 29 496.818 29Z" fill="#FF7E00"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M637.818 66C643.341 66 647.818 61.5228 647.818 56C647.818 50.4772 643.341 46 637.818 46C632.295 46 627.818 50.4772 627.818 56C627.818 61.5228 632.295 66 637.818 66Z" fill="#F7C348"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M362 81C373.046 81 382 72.0457 382 61C382 49.9543 373.046 41 362 41C350.954 41 342 49.9543 342 61C342 72.0457 350.954 81 362 81Z" fill="#FEFF65"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M68.818 122C74.3408 122 78.818 117.523 78.818 112C78.818 106.477 74.3408 102 68.818 102C63.2951 102 58.818 106.477 58.818 112C58.818 117.523 63.2951 122 68.818 122Z" fill="#FFBDCA"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M226.818 52C230.132 52 232.818 49.3137 232.818 46C232.818 42.6863 230.132 40 226.818 40C223.504 40 220.818 42.6863 220.818 46C220.818 49.3137 223.504 52 226.818 52Z" fill="#FFE949"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M390.553 34.7956C393.754 33.9379 395.653 30.6479 394.796 27.4471C393.938 24.2463 390.648 22.3468 387.447 23.2045C384.246 24.0621 382.347 27.3521 383.204 30.5529C384.062 33.7537 387.352 35.6532 390.553 34.7956Z" fill="#49FFF4"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M527.818 59C531.132 59 533.818 56.3137 533.818 53C533.818 49.6863 531.132 47 527.818 47C524.504 47 521.818 49.6863 521.818 53C521.818 56.3137 524.504 59 527.818 59Z" fill="#FFE949"/>
      <rect x="54.7175" y="31.9584" width="20" height="48" transform="rotate(45 54.7175 31.9584)" fill="#FCADFF"/>
      <rect x="199.918" y="78.1716" width="10" height="18" transform="rotate(-45 199.918 78.1716)" fill="#9BFFDA"/>
      <!-- Other SVG elements as before -->
    </svg>
  `;

    const encodedSVG = encodeURIComponent(svg);

    const staticQuestions = [
        {
            question:
                "How do you judge what should be added in the next version of the app?",
            correct_answer: "Data Analysis",
            incorrect_answers: ["Personal feeling", "Make a questionary", "Copy from similar product","User’s feedback"],
        },
        {
            question:
                "How do you judge what should be added in the next version of the app?",
                correct_answer: "Personal feeling",
                incorrect_answers: ["Data Analysis", "Make a questionary", "Copy from similar product","User’s feedback"],
        },
        {
            question:
                "How do you judge what should be added in the next version of the app?",
                correct_answer: "Data Analysis",
                incorrect_answers: ["Personal feeling", "Make a questionary", "Copy from similar product","User’s feedback"],
        },
        {
            question:
                "How do you judge what should be added in the next version of the app?",
                correct_answer: "Data Analysis",
                incorrect_answers: ["Personal feeling", "Make a questionary", "Copy from similar product","User’s feedback"],
        },
        {
            question:
                "How do you judge what should be added in the next version of the app?",
                correct_answer: ["Data Analysis"],
                incorrect_answers: ["Make a questionary", "Copy from similar product","User’s feedback"],
        },
    ];

    const [questions] = useState(staticQuestions);
    const [quizState, setQuizState] = useState("start");
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const totalQuestions = questions.length;
    const currentQuestion = currentQuestionIndex + 1;
    const progress = (currentQuestion / totalQuestions) * 100;


    const startQuiz = () => {
        setQuizState("quiz");
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setIsSubmitted(false);
    };

    const selectAnswer = (answer) => {
        if (!isSubmitted) {
            setSelectedAnswer(answer);
        }
    };

    const checkAnswer = () => {
        if (isSubmitted) return;

        const currentQuestionObj = questions[currentQuestionIndex];
        if (selectedAnswer === currentQuestionObj.correct_answer) {
            setScore((prevScore) => prevScore + 1);
        }
        setIsSubmitted(true);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedAnswer(null);
            setIsSubmitted(false);
        } else {
            setQuizState("end");
        }
    };

    const restartQuiz = () => {
        setQuizState("start");
        setSelectedAnswer(null);
    };

    const highlightAnswer = (answer) => {
        const currentQuestionObj = questions[currentQuestionIndex];
        if (isSubmitted) {
            if (answer === currentQuestionObj.correct_answer) return "correct";
            if (
                answer === selectedAnswer &&
                answer !== currentQuestionObj.correct_answer
            )
                return "wrong";
        }
        return "";
    };

  
    const scorePercentage = (score / totalQuestions) * 100;

    return (
        <div className="container">
            {quizState === "start" && (
                <div className="start-div">
                    <div className="start-screen">
                        <Logo />
                        <div className="quiz-circle">
                            <h1 className="heading">Quiz</h1>
                        </div>

                        <button className="btn start" onClick={startQuiz}>
                            Start
                        </button>
                    </div>
                </div>
            )}

            {quizState === "quiz" && questions.length > 0 && (
                <div
                    className="question-back-color"
                    style={{
                        backgroundColor: "rgba(175, 156, 243, 1)",
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${encodedSVG}")`,
                    }}
                >
                    <div className="quiz">
                        <div className="question-wrapper">
                            <div className="number">
                                <div style={{ borderRadius: "60px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: "-100px",
                                            marginLeft: "100px",
                                            backgroundColor: "#fff",
                                            width: "130px",
                                            height: "130px",
                                            borderRadius: "215px",
                                        }}
                                    >
                                        <svg width="100" height="100">
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                stroke="#dcdcdc"
                                                strokeWidth="5"
                                                fill="none"
                                            />
                                            <circle
                                                cx="50"
                                                cy="50"
                                                r="45"
                                                stroke="#44B77B"
                                                strokeWidth="5"
                                                fill="none"
                                                strokeDasharray="282" 
                                                strokeDashoffset={(1 - progress / 100) * 282} 
                                            />
                                            <text
                                                x="50%"
                                                y="50%"
                                                textAnchor="middle"
                                                stroke="#51c4d3"
                                                strokeWidth="1px"
                                                dy=".3em"
                                                fontSize="20px"
                                                fill="#000"
                                            >
                                                {currentQuestion}/{totalQuestions}
                                            </text>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="question">
                                {questions[currentQuestionIndex].question}
                            </div>
                        </div>

                        <div className="ans-bg-color">
                            <div className="answer-wrapper">
                                {[
                                    ...questions[currentQuestionIndex].incorrect_answers,
                                    questions[currentQuestionIndex].correct_answer,
                                ].map((answer) => (
                                    <div
                                        key={answer}
                                        className={`answer ${highlightAnswer(answer)} ${selectedAnswer === answer ? "selected" : ""
                                            }`}
                                        onClick={() => selectAnswer(answer)}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedAnswer === answer}
                                            readOnly
                                            className="answer-checkbox"
                                        />
                                        <span className="text">{answer}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="btn submit"
                                onClick={checkAnswer}
                                disabled={!selectedAnswer || isSubmitted}
                                style={{
                                    display: !isSubmitted && selectedAnswer ? "block" : "none",
                                }}
                            >
                                Submit
                            </button>

                            <button
                                className="btn next"
                                onClick={nextQuestion}
                                style={{ display: isSubmitted ? "block" : "none" }}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {quizState === "end" && (
                <div
                    className="question-back-color"
                    style={{
                        backgroundColor: "rgba(175, 156, 243, 1)",
                        backgroundImage: `url("data:image/svg+xml;charset=UTF-8,${encodedSVG}")`,
                    }}
                >
                    <div className="end-screen">
                        <div className="end-div">
                            <div
                                className="d-flex justify-content-center align-item-center"
                                style={{ fontSize: "30px", marginLeft: "40px" }}
                            >
                                Your result
                            </div>

                            <div className="score">
                                <svg width="300" height="300" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" transform="rotate(270)" >
                                    <circle cx="200" cy="200" r="110" fill="#FFFFFF" stroke="lightgrey" strokeWidth="30" />
                                    <circle cx="200" cy="200" r="80" fill="#FFFFFF" stroke="lightgrey" strokeWidth="5" />
                                    <circle cx="200" cy="200" r="60" fill="#FFFFFF" stroke="#ffffff" style={{ zIndex: 9999999 }} />
                                    <path d="M200,60 A140,140 0 0,1 310,130" fill="none" stroke="#FF0000" strokeWidth="20" />
                                    <path d="M310,130 A140,140 0 0,1 310,270" fill="none" stroke="yellow" strokeWidth="20" />
                                    <path d="M310,270 A140,140 0 0,1 200,340" fill="none" stroke="#44B77B" strokeWidth="20" />
                                    <line x1="200" y1="100" x2="200" y2="70" stroke="#000000" strokeWidth="10"
                                        transform={`rotate(${(scorePercentage / 100) * 180}, 200, 200)`}  />
                                    <circle cx="200" cy="200" r="10" fill="#ffffff" />
                                    <text
                                        x="200"
                                        y="210"
                                        textAnchor="middle"
                                        fontSize="24"
                                        fontWeight="bold"
                                        fill="#000000" 
                                        transform="rotate(90, 200, 200)"
                                    >
                                        {scorePercentage.toFixed(2)}%
                                    </text>
                                </svg>

                                <div className="answer-wrapper2">
                                    <div
                                        className={`answer2 ${questions.length - score === 0 || questions.length - score
                                            ? "invalid"
                                            : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            checked={questions.length - score > 0}
                                            readOnly
                                            className="invalid-checkbox"
                                        />
                                        <span
                                            className="text"
                                            style={{ color: "black", marginLeft: "5px" }}
                                        >
                                            {questions.length - score}
                                        </span>
                                        <span
                                            className="text"
                                            style={{
                                                color: "#3f4868",
                                                marginLeft: "5px",
                                                fontSize: "20px",
                                            }}
                                        >
                                            incorrect
                                        </span>
                                    </div>

                                    <div className={`answer2 ${score > 0 ||score == 0? "valid" : ""}`}>
                                        <input
                                            type="radio"
                                            checked={score > 0}
                                            readOnly
                                            className="valid-checkbox"
                                        />
                                        <span
                                            className="text"
                                            style={{ color: "black", marginLeft: "5px" }}
                                        >
                                            {score}
                                        </span>
                                        <span
                                            className="text"
                                            style={{
                                                color: "#3f4868",
                                                marginLeft: "5px",
                                                fontSize: "20px",
                                            }}
                                        >
                                            correct
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        marginLeft: "4px",
                                        marginRight: "-100px",
                                        marginTop: "40px",
                                    }}
                                >
                                    <button className="btn restart" onClick={restartQuiz}>
                                        Restart Quiz
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizApp;

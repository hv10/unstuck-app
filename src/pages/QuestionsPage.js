import React from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cat1tl, cat1br, cat2tl, cat2br } from "../constants/colors";
import Questions from "../constants/questions.json";

const useStyles = createUseStyles({
  page: {
    position: "relative",
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    fontSize: "calc(10px + 2vmin)",
    minHeight: "100vh",
    paddingBottom: 1,
    overflowY: "scroll",
    padding: "0 0 10px 5vw",
  },
  question: {
    fontSize: "calc(48px + 2vmin)",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
    marginBottom: "15vh",
    marginTop: "10vh",
  },
  centered: {
    maxWidth: "min(700px, 90vw)",
    position: "absolute",
    left: "min(350px,5vw)",
    top: 0,
  },
  answers: {
    fontSize: "calc(36px + 2vmin)",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
    fontFamily: "Courier Prime, monospace",
  },
  answer: {
    padding: "0.5em 0.5em",
    marginRight: "5vw",
    borderRadius: 10,
    transition: "background 1500ms",
    "&:active": {
      background: "rgba(255,255,255,0.3)",
      transition: "100ms",
    },
  },
});

export const QuestionsPage = () => {
  const classes = useStyles();
  const [question, setQuestion] = React.useState({
    question: "",
    A: {},
    B: {},
  });
  const selectNextQuestion = () => {
    return Questions[Math.floor(Math.random() * Questions.length)];
  };
  React.useLayoutEffect(() => {
    setQuestion(selectNextQuestion());
  }, []);
  const handleAnswer = (answer) => {
    setQuestion(selectNextQuestion());
  };
  return (
    <div className={classes.page}>
      <div className={classes.centered}>
        <div className={classes.question}>{question.question}</div>
        <div className={classes.answers}>
          <div
            onClick={() => handleAnswer(question.A)}
            className={classes.answer}
          >
            {question.A.text}
          </div>
          <div
            onClick={() => handleAnswer(question.B)}
            className={classes.answer}
          >
            {question.B.text}
          </div>
        </div>
      </div>
    </div>
  );
};

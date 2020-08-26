import React from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cat1tl, cat1br, cat2tl, cat2br } from "../constants/colors";

const useStyles = createUseStyles({
  page: {
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    fontSize: "calc(10px + 2vmin)",
    minHeight: "100vh",
    paddingBottom: 1,
    overflowY: "scroll",
    padding: "0 0 10px 5vw",
  },
  buttonAligner: {
    minHeight: "100vh",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    scrollSnapAlign: "center",
  },
  downwards: {
    color: "white",
    fontSize: "calc(48px + 2vmin)",
    position: "absolute",
    top: "calc(100vh - 48px - 4vmin)",
    left: 0,
    right: 0,
  },
  question: {
    fontSize: "calc(48px + 2vmin)",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
    marginBottom: "20vh",
    marginTop: "10vh",
  },
  answers: {
    fontSize: "calc(36px + 2vmin)",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
    fontFamily: "Courier Prime, monospace",
  },
  answer: {
    marginBottom: "0.5em",
  },
});

export const QuestionsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div className={classes.question}>
        Do you feel like you can concentrate?
      </div>
      <div className={classes.answers}>
        <div className={classes.answer}>Yes</div>
        <div className={classes.answer}>Not really...</div>
      </div>
    </div>
  );
};

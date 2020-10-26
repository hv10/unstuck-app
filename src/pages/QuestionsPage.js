import React from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cat1tl, cat1br, cat2tl, cat2br } from "../constants/colors";
import Words from "../constants/words.json";
import { WordSelector } from "../components/WordSelector";
import { Countdown } from "../components/Countdown";

const useStyles = createUseStyles({
  page: {
    position: "relative",
    width: "100vw",
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    height: "100vh",
  },
  holder: {
    position: "relative",
    padding: "5vmin",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  task: {
    fontSize: "2rem",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
    marginBottom: "12vh",
    paddingTop: "10vh",
    textTransform: "capitalize",
  },
});

export const QuestionsPage = () => {
  const classes = useStyles();
  const [words, setWords] = React.useState(Words);
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };
  return (
    <div className={classes.page}>
      <Countdown progress={0.9} thickness={0.05}>
        <div className={classes.holder}>
          <div className={classes.task}>Select words fitting your task:</div>
          <WordSelector
            focusWords={words.focusWords}
            diverseWords={words.diverseWords}
          />
        </div>
      </Countdown>
    </div>
  );
};

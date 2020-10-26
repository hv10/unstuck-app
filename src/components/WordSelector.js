import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  word: {
    position: "relative",
    color: "white",
    fontSize: "2rem",
    display: "flex",
    verticalAlign: "center",
  },
  checkBox: {
    position: "relative",
    width: "1em",
    height: "1em",
    backgroundColor: "rgba(200,200,200,0.5)",
    marginRight: "0.5em",
  },
  checkMark: {
    position: "absolute",
    left: "0.25em",
    top: "-0.25em",
    width: "0.5em",
    height: "1em",
    border: "solid white",
    borderWidth: "0 .25em .25em 0",
    transform: "rotate(45deg)",
  },
});

const Word = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.word}>
      <div className={classes.checkBox}>
        <div className={classes.checkMark} />
      </div>
      {children}
    </div>
  );
};

export const WordSelector = ({ focusWords = [], diverseWords = [] }) => {
  const classes = useStyles();
  return (
    <div>
      {focusWords.map((el) => (
        <Word>{el}</Word>
      ))}
      {diverseWords.map((el) => (
        <Word>{el}</Word>
      ))}
    </div>
  );
};

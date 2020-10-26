import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";

const useStyles = createUseStyles({
  word: {
    position: "relative",
    color: "white",
    fontSize: "2rem",
    padding: "0.1em 0.5em",
    boxSizing: "border-box",
    border: "0.1em solid transparent",
    transition: "0.2s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(200,200,200,0.2)",
    },
  },
  wordActive: {
    border: "0.1em solid white",
  },
  wordHolder: {
    position: "relative",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "0.25rem 0.5rem",
    justifyContent: "space-around",
  },
});

export const WordSelector = ({ focusWords = [], diverseWords = [] }) => {
  const classes = useStyles();
  const [active, setActive] = React.useState({});
  const handleWordClick = (el) => {
    if (active[el]) {
      setActive({ ...active, [el]: false });
    } else {
      setActive({ ...active, [el]: true });
    }
  };
  return (
    <div className={classes.wordHolder}>
      {focusWords.map((el) => (
        <span
          className={classNames(
            classes.word,
            active[el] ? classes.wordActive : null
          )}
          onClick={() => handleWordClick(el)}
        >
          {el}
        </span>
      ))}
      {diverseWords.map((el) => (
        <span
          className={classNames(
            classes.word,
            active[el] ? classes.wordActive : null
          )}
          onClick={() => handleWordClick(el)}
        >
          {el}
        </span>
      ))}
    </div>
  );
};

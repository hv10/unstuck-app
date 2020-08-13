import React from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cat1tl, cat1br, cat2tl, cat2br } from "../constants/colors";

const useStyles = createUseStyles({
  page: {
    textAlign: "center",
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    fontSize: "calc(10px + 2vmin)",
    minHeight: "100vh",
    paddingBottom: 1,
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    scrollPaddingTop: "10vh",
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
});

export const QuestionsPage = () => {
  const classes = useStyles();
  return <div className={classes.page}>Hello Questions</div>;
};

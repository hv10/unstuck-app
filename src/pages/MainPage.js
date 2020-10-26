import React from "react";
import { createUseStyles } from "react-jss";
import { StuckButton } from "../components/StuckButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { LastTips } from "../components/LastTips";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  page: {
    textAlign: "center",
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    fontSize: "calc(10px + 2vmin)",
    minHeight: "100vh",
    scrollSnapType: "y mandatory",
    overflowY: "scroll",
    overflowX: "hidden",
    scrollPaddingTop: "5vh",
  },
  buttonAligner: {
    minHeight: "100vh",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    scrollSnapAlign: "center",
    marginBottom: "calc(10px + 2vmin)",
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

export const MainPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div className={classes.buttonAligner}>
        <Link to={"/questions"} style={{ textDecoration: "none" }}>
          <StuckButton />
        </Link>
        <div className={classes.downwards}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <LastTips />
    </div>
  );
};

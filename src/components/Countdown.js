import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { cat1tl } from "../constants/colors";
import { useSpring, animated } from "react-spring";

const useStyles = createUseStyles({
  wrapper: {
    position: "relative",
    minHeight: 300,
    minWidth: 400,
  },
  progress: {
    zIndex: -1,
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: cat1tl,
    transition: "0.1s ease-in-out",
  },
  holder: {
    top: 5,
    left: 5,
    width: "calc(100% - 10px)",
    height: "calc(100% - 10px)",
    backgroundColor: "white",
    position: "absolute",
    transition: "ease-in",
  },
});

export const Countdown = ({ progress }, props) => {
  const classes = useStyles();
  const getClipPath = (progress) => {
    let val = "polygon(50% 50%,50% 0%,";
    let end = "50% 50%)";
    const angle = progress * 2 * Math.PI;
    let xComp = (Math.sin(angle) * 3000).toFixed(1);
    let yComp = (Math.cos(angle) * -3000).toFixed(1);
    if (progress >= 0.24) {
      val = val + "100% 0%,";
    }
    if (progress >= 0.49) {
      val = val + "100% 100%,";
    }
    if (progress >= 0.74) {
      val = val + "0% 100%,";
    }
    if (progress >= 0.999) {
      val = val + "0% 0%,";
    }
    val = val + `${xComp}% ${yComp}%,`;
    return val + end;
  };
  return (
    <div className={classes.wrapper}>
      <animated.div
        className={classes.progress}
        style={{ clipPath: getClipPath(progress) }}
      />
      <div className={classes.holder}>{props.children}</div>
    </div>
  );
};

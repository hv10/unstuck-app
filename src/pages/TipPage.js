import React from "react";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { cat1tl, cat1br, cat2tl, cat2br } from "../constants/colors";
import { parseContent } from "../utils/tipParsing";

const useStyles = createUseStyles({
  page: {
    background:
      "repeating-linear-gradient(-35deg, rgba(254, 0, 110, 1) 10vh, rgba(1, 31, 128, 1) 80vh, rgba(1, 31, 128, 1) 120vh, rgba(254, 0, 110, 1) 190vh)",
    fontSize: "calc(10px + 2vmin)",
    minHeight: "100vh",
    paddingBottom: 1,
  },
  tipContent: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "90vw",
    backgroundColor: "white",
    borderRadius: 35,
    paddingBottom: "1vh",
    paddingTop: "0.5em",
    paddingLeft: "0.5em",
    paddingRight: "0.5em",
    minHeight: "70vh",
  },
  tipTitle: {
    fontSize: "calc(48px + 2vmin)",
    padding: "10px 0 0 5vw",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
  },
  tipNumber: {
    fontSize: "calc(36px + 2vmin)",
    fontFamily: "Courier Prime, monospace",
    padding: "0 0 10px 5vw",
    textDecoration: "none",
    userSelect: "none",
    color: "white",
  },
});

export const TipPage = () => {
  const { id, mode } = useParams();
  const classes = useStyles();
  const [tipContent, setTipContent] = React.useState("Loading...");
  const [meta, setMeta] = React.useState({});
  React.useEffect(() => {
    const p = process.env.PUBLIC_URL + "/tips/" + mode + "/" + id + ".md";
    console.log(">>>>", p);
    fetch(p)
      .catch((error) => console.log(error))
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        const { metaVars, content } = parseContent(text);
        setMeta(metaVars);
        setTipContent(content);
      });
  }, [id, mode]);
  const topLeftColor = meta["category"] === "incubation" ? cat1tl : cat2tl;
  const bottomRightColor = meta["category"] === "incubation" ? cat1br : cat2br;
  return (
    <div
      className={classes.page}
      style={{
        background: `repeating-linear-gradient(-35deg, ${bottomRightColor} 0%, ${topLeftColor} 100%)`,
      }}
    >
      <div className={classes.tipTitle}>{meta["title"]}</div>
      <div className={classes.tipNumber}>
        <span style={{ fontSize: "0.75em" }}>#</span>
        {meta["number"]}
      </div>
      <div className={classes.tipContent}>
        <ReactMarkdown source={tipContent} escapeHtml={false} />
      </div>
    </div>
  );
};

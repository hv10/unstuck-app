import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export const TipPage = () => {
  const { id } = useParams();
  const [tipContent, setTipContent] = React.useState("Loading...");
  const cleanContent = (text) => {
    let lines = text.split("\n");
    console.log(lines.length);
    var i = 0;
    while (lines[i].startsWith("--")) {
      i++;
    }
    return lines.slice(i).join("\n");
  };
  React.useEffect(() => {
    const p = process.env.PUBLIC_URL + "/tips/" + id + ".md";
    fetch(p)
      .catch((error) => console.log(error))
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        console.log(text);
        setTipContent(cleanContent(text));
      });
  }, []);
  return (
    <div>
      <ReactMarkdown source={tipContent} escapeHtml={false} />
    </div>
  );
};

import React from "react";
import "../index.css";

import { WordSelector } from "../components/WordSelector";

export default {
  title: "UnstuckComponents/WordSelector",
  component: WordSelector,
};

const Template = (args) => {
  return <WordSelector {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  focusWords: ["concentrate", "sequential", "linear", "efficient", "detailed"],
  diverseWords: ["free", "flowing", "parallel", "wandering", "manyfold"],
};

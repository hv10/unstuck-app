import React from "react";
import "../index.css";

import { Countdown } from "../components/Countdown";

export default {
  title: "UnstuckComponents/Countdown",
  component: Countdown,
};

const Template = (args) => {
  return (
    <div>
      <Countdown {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  progress: 0.5,
  thickness: 0.05,
};

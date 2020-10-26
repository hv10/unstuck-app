import React from "react";
import "../../index.css";

import { Countdown } from "../../components/Countdown";

export default {
  title: "Components/Countdown",
  component: Countdown,
};

const Template = (args) => {
  return (
    <div style={{ height: "100vh" }}>
      <Countdown {...args}>
        <p>
          <br />
          &nbsp;Hello
          <br />
        </p>
        <p>
          <br />
          &nbsp;Hello
          <br />
        </p>
        <p>
          <br />
          &nbsp;Hello
          <br />
        </p>
      </Countdown>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  progress: 0.5,
  thickness: 0.05,
};

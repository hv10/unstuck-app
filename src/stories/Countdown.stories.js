import React from "react";
import "../index.css";

import { Countdown } from "../components/Countdown";

export default {
  title: "UnstuckComponents/Countdown",
  component: Countdown,
};

const Template = (args) => {
  const [progress, setProgress] = React.useState(0);
  const [waiting, setWaiting] = React.useState(false);
  React.useEffect(() => {
    const timer = setInterval(() => {
      if (progress <= 1) {
        setProgress(progress + 1 / 28);
      } else {
        if (!waiting) {
          setWaiting(true);
          setTimeout(() => {
            setProgress(0);
            setWaiting(false);
          }, 1000);
        }
      }
    }, 250); // clearing interval
    return () => clearInterval(timer);
  });
  return (
    <div>
      <Countdown {...args} progress={progress} />
    </div>
  );
};

export const Default = Template.bind({});

import React from "react";

import { Questions } from "../../pages/QuestionsPage";
import { QuestionsPage } from "../../pages/QuestionsPage";

export default {
  title: "Pages/Questions",
  component: QuestionsPage,
};

const Template = (args) => <QuestionsPage {...args} />;

export const Default = Template.bind({});

import React from "react";

import { MainPage } from "../../pages/MainPage";
import { Router } from "react-router";

export default {
  title: "Pages/Main",
  component: MainPage,
};

const Template = (args) => <MainPage {...args} />;

export const Default = Template.bind({});

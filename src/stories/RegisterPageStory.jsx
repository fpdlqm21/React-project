import React from "react";
import { storiesOf } from "@storybook/react";

import RegisterPage from "../components/RegisterPage";
import MainPage from "../components/MainPage";
import Login from "../components/Login";

storiesOf("Register Test", module)
  .addWithJSX("Register", () => (
    <div>
      <RegisterPage />
    </div>
  ))
  .addWithJSX("Modal Test", () => (
    <div>
      <MainPage>
        <Login />
      </MainPage>
    </div>
  ));

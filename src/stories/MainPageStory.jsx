import React from "react";
import { storiesOf } from "@storybook/react";

import MainPage from "../components/MainPage";

storiesOf("MainPage Test", module).addWithJSX("MainPage", () => <MainPage />);

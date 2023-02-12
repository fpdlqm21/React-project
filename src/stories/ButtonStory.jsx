import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../components/Button";

storiesOf("Button Test", module).addWithJSX("Button", () => (
  <div>
    <Button>버튼</Button>
    <Button primary>버튼 primary</Button>
    <Button secondary>버튼 secondary</Button>
  </div>
));

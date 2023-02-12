import React from "react";
import { storiesOf } from "@storybook/react";

import Input from "../components/Input";
import Form from "../components/Form";

storiesOf("Form Test", module).addWithJSX("Form", () => (
  <div>
    <Input name="Test1" label="테스트1" value="ID" />
    <Input name="Test2" label="테스트2" value="PW" />
  </div>
));

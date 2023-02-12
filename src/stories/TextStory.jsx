import React from "react";
import { storiesOf } from "@storybook/react";

import Text from "../components/Text";
import Heading from "../components/Heading";

storiesOf("Text Test", module).addWithJSX("Text", () => (
  <div>
    <Heading level={1}>Heading</Heading>
    <Heading level={2}>Heading</Heading>
    <Text xlarge bold primary>
      xlarge
    </Text>
    <Text large light>
      large
    </Text>
    <Text xsmall>xsmall</Text>
    <Text small secondary>
      small
    </Text>
  </div>
));

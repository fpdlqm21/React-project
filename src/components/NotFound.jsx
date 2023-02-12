import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import Text from "./Text";
import Spacing from "./Spacing";

class NotFound extends PureComponent {
  render() {
    const { url } = this.props.match || {};
    return (
      <Link>
        <Spacing bottom={2}>
          <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
        </Spacing>
      </Link>
    );
  }
}

export default NotFound;

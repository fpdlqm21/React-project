//공간을 설정하는 컴포넌트
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css } from "../withStyles";
import { unit } from "../Theme";

class Spacing extends PureComponent {
  render() {
    const { children, top, left, right, bottom, vertical, horizontal } =
      this.props;

    //프로퍼티로 전달된 값이 있으면 전달된 값으로 없으면 vertical, horizontal로 설정
    const computedTop = top ? top : vertical;
    const computedBottom = bottom ? bottom : vertical;
    const computedLeft = left ? left : horizontal;
    const computedRight = right ? right : horizontal;

    //설정된 값들을 객체화
    const computedStyles = {
      flex: 1,
      textAlign: "center",
      ...(computedTop && { marginTop: computedTop * unit }),
      ...(computedBottom && { marginBottom: computedBottom * unit }),
      ...(computedLeft && { marginLeft: computedLeft * unit }),
      ...(computedRight && { marginRight: computedRight * unit }),
    };

    return <div {...css(computedStyles)}>{children}</div>;
  }
}

export const propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

Spacing.propTypes = propTypes;

export default Spacing;

/**가로 배치를 위한 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "../withStyles";
import { unit } from "../Theme";

class InlineList extends PureComponent {
  render() {
    const { align, children, styles, spacingBetween, verticalAlign } =
      this.props;
    return (
      <div
        {...css(
          styles.wrapper,
          align === "center" && styles.align.alignCenter,
          align === "right" && styles.alignRight,
          verticalAlign === "top" && styles.verticalAlignTop,
          verticalAlign === "bottom" && styles.verticalAlignBottom
        )}
      >
        {React.Children.map(children, (child) => (
          <div {...css({ marginRight: spacingBetween * unit })}>{child}</div>
        ))}
      </div>
    );
  }
}

InlineList.propTypes = {
  ...withStylesPropTypes,
  align: PropTypes.oneOf(["left", "center", "right"]),
  verticalAlign: PropTypes.oneOf(["top", "middle", "bottom"]),
  spacingBetween: PropTypes.number,
  children: PropTypes.node,
};

InlineList.defaultProps = {
  spacingBetween: 1,
};

export default withStyles(() => ({
  wrapper: {
    display: "flex",
    flexDirection: "row", //가로배치
    flexWrap: "wrap",
    justifyContent: "center", //주축 가운데 정렬
    alignItems: "center", //교차축 가운데 정렬
  },
  alignCenter: {
    justifyContent: "center", //주축 센터
  },
  alignRight: {
    justifyContent: "flex-end", //주축 오른쪽 끝에 정렬
  },
  verticalAlignTop: {
    alignItems: "flex-start", //교차축 왼쪽 시작점에 정렬
  },
  verticalAlignBottom: {
    alignItems: "flex-end", //교차축 맨 밑 끝점에 정렬
  },
}))(InlineList);

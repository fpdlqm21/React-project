/**h태그를 위한 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css, withStyles } from "../withStyles";

//h태그 종류
const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];

class Heading extends PureComponent {
  render() {
    //level을 프로퍼티로 받아 굵기 및 크기 설정
    const { children, level, styles, inverse } = this.props;

    const HeadingTag = headingTags[level - 1];
    return (
      <HeadingTag
        {...css(
          styles.default,
          styles[`level${level}`],
          inverse && styles.inverse
        )}
      >
        {children}
      </HeadingTag>
    );
  }
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number,
  styles: PropTypes.bool,
  inverse: PropTypes.bool,
};
Heading.defaultProps = {
  level: 1,
};

export default withStyles(({ color, fontWeight, size, lineHeight, unit }) => ({
  default: {
    lineHeight: lineHeight.lg,
    fontWeight: fontWeight.bold,
  },
  inverse: {
    color: color.white,
  },
  level1: {
    fontSize: size.h1,
    marginTop: unit * 2,
    marginBottom: unit * 4,
  },
  level2: {
    fontSize: size.h2,
    marginTop: unit * 2,
    marginBottom: unit * 4,
  },
  level3: {
    fontSize: size.h3,
    marginTop: unit * 1.5,
    marginBottom: unit * 3,
  },
  level4: {
    fontSize: size.h4,
    marginTop: unit,
    marginBottom: unit * 2,
  },
  level5: {
    fontSize: size.h5,
    marginTop: unit,
    marginBottom: unit * 2,
  },
  level6: {
    fontSize: size.h6,
    marginTop: unit,
    marginBottom: unit,
  },
}))(Heading);

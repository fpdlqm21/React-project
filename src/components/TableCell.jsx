/**테이블 셀 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles, css, withStylesPropTypes } from "../withStyles";

class TableCell extends PureComponent {
  render() {
    const { align, baseline, styles, children, isHeader } = this.props;
    const Tag = isHeader ? "th" : "td"; //isHeader -> true = 테이블 헤더
    return (
      <Tag
        {...css(
          styles.cell,
          isHeader && styles.header, //헤더일 경우
          !isHeader && baseline && styles.baseline, //헤더가 아닌 경우
          align === "center" && styles.alignCenter, //props로 align 전달받은 경우
          align === "right" && styles.alignRight
        )}
      >
        {children}
      </Tag>
    );
  }
}

TableCell.propTypes = {
  ...withStylesPropTypes,
  align: PropTypes.oneOf(["left", "right", "center"]),
  baseline: PropTypes.bool,
  children: PropTypes.node,
  isHeader: PropTypes.bool,
};

TableCell.defaultProps = {
  baseline: true,
  isHeader: false,
};

export default withStyles(({ color, unit }) => ({
  cell: {
    paddingTop: unit * 4,
    paddingBottom: unit * 4,
    paddingRight: unit * 8,
    paddingLeft: unit * 8,
    backgroundColor: color.white,
    textAlign: "center",
  },
  header: {
    backgroundColor: color.primary,
    color: color.white,
  },
  baseline: {
    borderBottom: `1px solid ${color.border}`,
  },
  alignCenter: {
    textAlign: "center",
  },
  alignRight: {
    textAlign: "right",
  },
}))(TableCell);

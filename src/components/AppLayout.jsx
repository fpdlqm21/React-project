//AppLayout
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { css, withStyles, withStylesPropTypes } from "../withStyles";
import AppNav, { HEIGHT } from "./AppNav";

class MainPage extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      <div {...css(styles.wrapper)}>
        <AppNav />
        <div {...css(styles.body)}>{children}</div>
      </div>
    );
  }
}

MainPage.propTypes = {
  ...withStylesPropTypes,
  children: PropTypes.node,
};

export default withStyles(({ unit }) => ({
  wrapper: {
    marginTop: HEIGHT,
  },
  body: {
    padding: unit * 4,
  },
}))(MainPage);

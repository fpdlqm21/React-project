//MainPage의 상단내용
import React, { PureComponent } from "react";
import { withStyles, css, withStylesPropTypes } from "../withStyles";
import Heading from "./Heading";
import Text from "./Text";

export const HEIGHT = 150;

class AppNav extends PureComponent {
  render() {
    const { styles } = this.props;

    return (
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container1)}>
          <Heading level={1} inverse>
            Market
          </Heading>
        </div>
        {/* <div {...css(styles.container2)}>
          <Text inverse bold large>
            회원 가입
          </Text>
        </div> */}
      </div>
    );
  }
}

AppNav.propTypes = {
  ...withStylesPropTypes,
};

export default withStyles(({ color, depth, unit }) => ({
  wrapper: {
    ...depth.level1,
    display: "flex",
    //flexDirection: "column",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: HEIGHT - 4,
    backgroundColor: color.primary,
  },
  container1: {
    marginTop: unit * 3,
  },
  container2: {
    position: "fixed",
    top: 100,
    right: 0,
  },
}))(AppNav);

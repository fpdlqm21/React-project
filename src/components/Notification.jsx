/**error발생 시 errorMessage를 출력하도록 Toast컴포넌트에 보내는 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Toast from "./Toast";

class Notification extends PureComponent {
  render() {
    const { showMessage, message, warning } = this.props;

    return showMessage && <Toast message={message} warning={warning} />;
  }
}

Notification.propTypes = {
  showMessage: PropTypes.bool,
  message: PropTypes.string,
  warning: PropTypes.bool,
};

export default Notification;

/**거래 페이지 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import TransactionList from "./TransactionList";

class TransactionPage extends PureComponent {
  render() {
    const { children, styles } = this.props;
    return (
      <div>
        <div>
          <TransactionList />
        </div>
      </div>
    );
  }
}

export default TransactionPage;

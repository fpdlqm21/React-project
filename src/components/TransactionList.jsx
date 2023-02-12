/**현재 거래중인 목록 컴포넌트 */
import React, { PureComponent } from "react";
import { css, withStyles } from "../withStyles";
import { Consumer as Modal } from "../Modal/context";
import { ADD_PRODUCT_MODAL } from "../Modal/ModalProviderWithKey";

import Heading from "./Heading";
import Card from "./Card";
import SearchFilterContainer from "../containers/main/SearchFilterContainer";
import TransactionTable from "./TransactionTable";
import Button from "./Button";

class TransactionList extends PureComponent {
  state = {
    transactions: [],
  };

  componentDidMount() {
    //transactionActions.js의 액션객체의 payload로 data 전달
    // Api.get("/transactions").then(({ data }) =>
    //   this.props.setTransactionList(data)
    // );
    //transactionActions로 Api.get부분 옮김(해당 부분을 액션에 담아 공유할 수 있게됨)
    this.props.requestTransactionList();
  }

  render() {
    const { styles } = this.props;
    const { transactions, loading } = this.props;
    return (
      <div>
        <div {...css(styles.button)}>
          <Modal>
            {({ openModal }) => (
              <Button primary onPress={() => openModal(ADD_PRODUCT_MODAL)}>
                추가
              </Button>
            )}
          </Modal>
        </div>
        <div {...css(styles.container)}>
          <Heading level={3}>거래 현황</Heading>
          <Card vertical={4} horizontal={4}>
            <SearchFilterContainer />
          </Card>
          <Card>
            <TransactionTable transactions={transactions} isLoading={loading} />
            {/* isLoading 프로퍼티는 TransactionTable을 거쳐 withLoading컴포넌트의 프로퍼티로 전달됨 */}
          </Card>
        </div>
      </div>
    );
  }
}

TransactionList.propTypes = {
  transactions: [],
  requestTransactionList: () => {},
};
export default withStyles(({ unit }) => ({
  container: {
    marginTop: unit * 3,
  },
  button: {
    float: "right",
  },
}))(TransactionList);

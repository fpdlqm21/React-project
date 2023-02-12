/**TransactionTable에서 구매버튼을 누르면 나오는 모달창 */
import React, { PureComponent } from "react";
import { Consumer as Modal } from "../Modal/context";
import PropTypes from "prop-types";
import Api from "../Api";

import Form from "./Form";
import InlineList from "./InlineList";
import Text from "./Text";
import Button from "./Button";
import Spacing from "./Spacing";

class TradeProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values, closeModal) {
    const { Id, buyTransaction } = this.props;
    buyTransaction(Id, closeModal);
  }
  deleteData(Id) {
    Api.delete(`transactions/${Id}`);
  }
  render() {
    return (
      <Modal>
        {({ closeModal }) => (
          // <Form
          //   onSubmit={(values) => this.handleSubmit(values, closeModal)}
          //   initValues={{ id: Id }}
          // >
          <Spacing horizontal={2} vertical={2}>
            <Text xlarge bold>
              물건 구매
            </Text>
            <Spacing horizontal={2} vertical={2}>
              <Text large>물건을 구매하시겠습니까?</Text>
            </Spacing>
            <Spacing top={2} bottom={2}>
              <InlineList>
                <Button primary>구매</Button>
                <Button onPress={closeModal}>취소</Button>
              </InlineList>
            </Spacing>
          </Spacing>
          // </Form>
          // <Spacing horizontal={2} vertical={2}>
          //   <Text xlarge bold>
          //     물건 구매
          //   </Text>
          //   <Spacing horizontal={2} vertical={2}>
          //     <Text large>물건을 구매하시겠습니까?</Text>
          //   </Spacing>
          //   <Spacing top={2} bottom={2}>
          //     <InlineList>
          //       <Button primary>구매</Button>
          //       <Button onPress={closeModal}>취소</Button>
          //     </InlineList>
          //   </Spacing>
          // </Spacing>
        )}
      </Modal>
    );
  }
}

TradeProductPage.propTypes = {
  buyTransaction: PropTypes.func,
};

export default TradeProductPage;

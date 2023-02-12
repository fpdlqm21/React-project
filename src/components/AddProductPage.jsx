/**거래물건 추가 모달 창 */
import React, { PureComponent } from "react";
import { Consumer as Modal } from "../Modal/context";
import PropTypes from "prop-types";

import Form from "./Form";
import Input from "./Input";
import Text from "./Text";
import Button from "./Button";
import InlineList from "./InlineList";
import Spacing from "./Spacing";

class AddProductPage extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values, closeModal) {
    const { name, createTransaction } = this.props;
    const formValues = {
      ...values,
      //name,
    };
    createTransaction(formValues, closeModal);
  }
  render() {
    const { name, price, seller } = this.props;
    return (
      <Modal>
        {({ closeModal }) => (
          <Form
            onSubmit={(values) => this.handleSubmit(values, closeModal)}
            initValues={{ name: name, price: price, seller: seller }}
          >
            <Form.Consumer>
              {({ onChange, values }) => (
                <Spacing horizontal={4}>
                  <Text xlarge bold>
                    판매물건 등록
                  </Text>
                  <Spacing top={2} bottom={2}>
                    <Input name="name" label="물건" onChange={onChange} />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input name="price" label="가격" onChange={onChange} />
                  </Spacing>
                  <Spacing bottom={2}>
                    <Input name="seller" label="판매자" onChange={onChange} />
                  </Spacing>
                  <InlineList spacingBetween={1}>
                    <Button primary center>
                      등록
                    </Button>
                    <Button onPress={closeModal}>닫기</Button>
                  </InlineList>
                </Spacing>
              )}
            </Form.Consumer>
          </Form>
        )}
      </Modal>
      // <Spacing horizontal={4}>
      //   <Text xlarge bold>
      //     판매물건 등록
      //   </Text>
      //   <Spacing top={2} bottom={2}>
      //     <Input name="name" label="물건" />
      //   </Spacing>
      //   <Spacing bottom={2}>
      //     <Input name="price" label="가격" />
      //   </Spacing>
      //   <Spacing bottom={2}>
      //     <Input name="seller" label="판매자" />
      //   </Spacing>
      //   <InlineList spacingBetween={1}>
      //     <Button primary center>
      //       등록
      //     </Button>
      //     <Modal>
      //       {({ closeModal }) => <Button onPress={closeModal}>닫기</Button>}
      //     </Modal>
      //   </InlineList>
      // </Spacing>
    );
  }
}

AddProductPage.propTypes = {
  createTransaction: PropTypes.func,
};
export default AddProductPage;

/**로그인 창 컴포넌트 */
import React, { PureComponent } from "react";
import { css, withStyles, withStylesPropTypes } from "../withStyles";
import { Consumer as Modal } from "../Modal/context";
import { Link } from "react-router-dom";

import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import ModalProviderWithKey, {
  CREATE_MEMBER_MODAL,
} from "../Modal/ModalProviderWithKey";

class Login extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { styles } = this.props;
    return (
      // <Form> form이 submit으로 서버에 보내는 액션을 하니 모달창이 자꾸 꺼짐
      <div {...css(styles.wrapper)}>
        <Input name="ID" label="아이디" />
        <Input name="PW" label="패스워드" type="password" />
        <Link to="/TransactionPage">
          <Button>로그인</Button>
        </Link>
        <Modal>
          {({ openModal }) => (
            <Button onPress={() => openModal(CREATE_MEMBER_MODAL)}>
              회원가입
            </Button>
          )}
        </Modal>
      </div>
      //</Form>
    );
  }
}

export default withStyles(({ unit }) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: unit * 10,
  },
}))(Login);

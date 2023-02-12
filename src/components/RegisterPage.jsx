/**회원 가입 모달 창 */
import React, { PureComponent } from "react";
import Text from "./Text";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import InlineList from "./InlineList";
import Spacing from "./Spacing";
import { Consumer as Modal } from "../Modal/context";

class RegisterPage extends PureComponent {
  render() {
    return (
      //<Form>
      <Spacing horizontal={4} vertical={8}>
        <Text xlarge bold>
          회원등록
        </Text>
        <Spacing top={10} bottom={2}>
          <Input name="userID" label="ID 입력" />
        </Spacing>
        <Spacing bottom={2}>
          <Input name="userPW" label="PW 입력" type="password" />
        </Spacing>
        <Spacing bottom={10}>
          <Input name="Phone" label="전화번호 입력" type="tel" />
        </Spacing>
        <InlineList spacingBetween={1}>
          <Button type="submit" primary center>
            회원등록
          </Button>
          <Modal>
            {({ closeModal }) => <Button onPress={closeModal}>취소</Button>}
            {/* 회원 등록도 컨텍스트 사용하려면 소비자 바운더리 수정해야함 */}
          </Modal>
        </InlineList>
      </Spacing>
      //</Form>
    );
  }
}

export default RegisterPage;

/**검색 필터 컴포넌트 */
import React, { PureComponent } from "react";
import Api from "../Api";
import PropTypes from "prop-types";

import InlineList from "./InlineList";
import Button from "./Button";
import Text from "./Text";
import Input from "./Input";
import Form from "./Form";

class SearchFilter extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(params) {
    const { requestTransactionList } = this.props;
    /**검색창에 공백으로 검색하면 목록이 안뜨는 것을 방지하기 위해 */
    const cleanedParams = Object.entries(params)
      .filter(([key, value]) => value !== "") //객체에서 배열로 변환됨
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    //검색창의 값을 필터로 공백이 아닌 요소만 저장하고 배열에서 객체로 다시 변환
    //결국 공백을 검색하면 -> requestTransactionList에서 Api.get(/transactions?)만 전달됨
    requestTransactionList(cleanedParams);
  }
  render() {
    return (
      //Form에 onSubmit프로퍼티로 Api.get을 전달, Form의 handleSubmit에서 이를 이용
      <Form onSubmit={this.handleSubmit}>
        {/* Form의 handleSubmit에서 전달받은 values는 params에 넘겨줄 값의 구조와 동일하므로 바로 대입가능 */}
        <Form.Consumer>
          {({ onChange, values }) => (
            <InlineList spacingBetween={2} verticalAlign="bottom">
              <Text xlarge bold>
                찾아보기
              </Text>
              <Input name="name" onChange={onChange} value={values["name"]} />
              <Button primary type="submit">
                검색
              </Button>
            </InlineList>
          )}
        </Form.Consumer>
      </Form>
    );
  }
}

SearchFilter.propTypes = { requestTransactionList: PropTypes.func };

export default SearchFilter;

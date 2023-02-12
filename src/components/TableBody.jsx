/**테이블 바디 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableBody extends PureComponent {
  render() {
    const { children } = this.props;
    const { length } = React.Children.toArray(children);
    //TableBody로 받은 children들(여러 개의 행들)을 Array화 시켜 길이 저장
    return (
      <tbody>
        {React.Children.map(children, (child, index) => {
          const baseline = index < length - 1 ? true : false;
          //마지막 요소일경우 행의 밑줄을 생략하도록 함 -> 생략하지 않으면 테이블의 밑줄과 겹침
          return React.cloneElement(child, { baseline });
        })}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  children: PropTypes.node,
};

export default TableBody;

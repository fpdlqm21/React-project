/**테이블 헤더 컴포넌트 */
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableHead extends PureComponent {
  render() {
    const { children } = this.props;

    return (
      <thead>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isHeader: true })
        )}
        {/* children은 JSX노드 형태이므로 React.Chidren.map이용(배열처럼 취급),
                JSX노드를 복사한 뒤 isHeader라는 프로퍼티 새로 전달 */}
      </thead>
    );
  }
}

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;

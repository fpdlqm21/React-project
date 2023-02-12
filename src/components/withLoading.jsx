/**로딩상태를 표시하는 하이어오더 컴포넌트 */
import React from "react";

export default (loadingMessage = "로딩중") =>
  (WrappedComponent) => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;
    //감싼 컴포넌트의 이름을 추출하고 displayName, componentName 중 존재하는 값으로 저장
    //둘 다 없으면 componentName으로 저장

    function withLoading({ isLoading, ...props }) {
      if (isLoading) {
        return loadingMessage;
      }

      return <WrappedComponent {...props} />;
    }
    withLoading.displayName = `withLoading(${wrappedComponentName})`;
    return withLoading;
  };

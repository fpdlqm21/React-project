//Form 컴포넌트
import React from "react";
import PropTypes from "prop-types";

const { Provider, Consumer } = React.createContext({});

class FormProvider extends React.PureComponent {
  static Consumer = Consumer;
  //props로 받은 initValues와 이전 state값인 prevState를 이용해서 state를 동기화
  static getDerivedStateFromProps({ initValues }, prevState) {
    const values =
      initValues !== prevState.initValues ? initValues : prevState.values;

    //변경된 state반환
    return {
      initValues,
      values,
      errors: {},
    };
  }

  constructor(props) {
    super(props);
    this.state = {};
    this.reset = this.reset.bind(this);
    this.validate = this.validate.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { values, errors } = this.state;
    e.preventDefault(); //리로드x
    if (Object.values(errors).length === 0) {
      this.props.onSubmit(values);
    }
  }

  //SearchFilter의 Input이 변경될 때
  onChange(name, updatedValue) {
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue,
        },
      }),
      () => this.validate(this.state.values)
    );
  }

  reset() {
    this.setState({ values: {} });
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = this.props.validate(values);
    this.setState({
      errors,
    });
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors,
          values,
          onChange: this.onChange,
          reset: this.reset,
        }}
      >
        <form onSubmit={this.handleSubmit}>{this.props.children}</form>
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};

FormProvider.defaultProps = {
  initValues: {},
  validate: () => ({}),
};

export default FormProvider;

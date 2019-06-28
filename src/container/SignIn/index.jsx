import React from 'react';
import PropTypes from 'prop-types';
import SignIn from '../../component/SignIn';
import { getLookup } from '../../express/signIn';

class SignInContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getLookup();
    // fetch('http://localhost:8770/lookup')
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       console.log(result);
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       console.log(error);
    //     },
    //   );
  }

  handleClick() {
    this.setState({ a: 2 });
    localStorage.setItem('accessToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU4MTc5MTMyLCJleHAiOjE1NTg3ODM5MzJ9.'
      + '4_fzM1EjNucbdxme33egRLtMtI8eyz3OAM4_sRKRxqOMPsj6J0ssW1uC03XTe8eSGodrKgPy7ptzzlBtWmi4BA');
  }

  render() {
    const { a } = this.state;
    const { login } = this.props;
    return (
      <SignIn
        login={login}
        temp={a}
      />
    );
  }
}

SignInContainer.propTypes = {
  login: PropTypes.func.isRequired,
};


export default SignInContainer;

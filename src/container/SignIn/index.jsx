import React from 'react';
import SignIn from '../../component/SignIn';

class SignInContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      a: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ a: 2 });
    localStorage.setItem('accessToken',
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTU4MTc5MTMyLCJleHAiOjE1NTg3ODM5MzJ9.'
      + '4_fzM1EjNucbdxme33egRLtMtI8eyz3OAM4_sRKRxqOMPsj6J0ssW1uC03XTe8eSGodrKgPy7ptzzlBtWmi4BA');
  }

  render() {
    const { a } = this.state;
    return (
      <SignIn
        handleClick={this.handleClick}
        temp={a}
      />
    );
  }
}

export default SignInContainer;

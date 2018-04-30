import React from 'react'
import Button from './Button'
import LoginDialog from './LoginDialog'
import './index.css'

class MorphingForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loginOpen: false,
      signupOpen: false
    }
    this.openLoginDialog = this.openLoginDialog.bind(this);
    this.closeLoginDialog = this.closeLoginDialog.bind(this);
    this.openSignupDialog = this.openSignupDialog.bind(this);
    this.closeSignupDialog = this.closeSignupDialog.bind(this);
  }
  render() {
    return (
      <section
        className="MorphingForm">
        <div className="MorphingForm-button-container">
          <Button
            text="Login"
            onClick={this.openLoginDialog} />
          <LoginDialog />
        </div>
        <span>or</span>
        <div
          className="MorphingForm-button-container">
          <Button
            text="Sign Up"
            onClick={this.openSignupDialog} />
        </div>
      </section>
    )
  }
  openLoginDialog() {
    this.setState({
      loginOpen: true,
      signupOpen: false
    });
  }
  closeLoginDialog() {
    this.setState({
      loginOpen: false,
    });
  }
  openSignupDialog() {
    this.setState({
      loginOpen: false,
      signupOpen: true
    });
  }
  closeSignupDialog() {
    this.setState({
      signupOpen: false
    });
  }
}

export default MorphingForm

import React from 'react';

class LoginDialog extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.open) {
      return null;
    }
    return (
      <div>
        <form>
          <input type="text" />
          <input type="text" />
        </form>
      </div>
    )
  }
}

export default LoginDialog

import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          name="Email"
          //   value={this.state.address1}
          placeholder="請填寫信箱或帳號"
          className="input-block"
        />
        <input
          type="text"
          name="password"
          //   value={this.state.address1}
          placeholder="密碼"
          className="input-block"
        />
      </div>
    );
  }
}
export default Login;

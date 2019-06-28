import React from "react";
import "./style.css";
class Login extends React.Component {
  state = {
    checkDisplayPassword: false
  };
  checkDisplayPassword = () => {
    this.setState({
      checkDisplayPassword: !this.state.checkDisplayPassword
    });
  };
  render() {
    return (
      <div style={{ marginTop: "10px" }} className="login-content">
        <input
          type="text"
          name="Email"
          //   value={this.state.email}
          placeholder="請填寫信箱或帳號"
          className="input-block"
        />
        <input
          type="text"
          name="password"
          //   value={this.state.password}
          placeholder="密碼"
          className="input-block"
        />
        <label>
          <input
            type="checkbox"
            onChange={this.checkDisplayPassword}
            value={this.state.checkDisplayPassword}
          />
          顯示密碼
        </label>
        <div
          className="enter-btn"
        >
          送出
        </div>
      </div>
    );
  }
}
export default Login;

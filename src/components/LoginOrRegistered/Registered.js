import React from "react";
import "./style.css";
class Registered extends React.Component {
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
      <div className="registered-content">
        <input
          type="text"
          name="name"
          //   value={this.state.address1}
          placeholder="請填寫帳號"
          className="input-block"
        />
        <input
          type="email"
          name="Email"
          //   value={this.state.address1}
          placeholder="請填寫信箱"
          className="input-block"
        />
        <input
          type={this.state.checkDisplayPassword ? "text" : "password"}
          name="password"
          //   value={this.state.address1}
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
        <div className="enter-btn">送出</div>
      </div>
    );
  }
}
export default Registered;

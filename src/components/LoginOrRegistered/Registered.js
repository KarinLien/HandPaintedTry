import React from "react";

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
      <div style={{ marginTop: "10px" }}>
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
        <div
          style={{
            width: "25%",
            padding: "10px",
            color: "white",
            background: "black",
            textAlign: "center",
            marginTop: "15px"
          }}
        >
          送出
        </div>
      </div>
    );
  }
}
export default Registered;

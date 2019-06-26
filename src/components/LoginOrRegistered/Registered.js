import React from "react";

class Registered extends React.Component {
  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          name="name"
          //   value={this.state.address1}
          placeholder="請填寫帳號"
        />
        <input
          type="text"
          name="Email"
          //   value={this.state.address1}
          placeholder="請填寫信箱"
        />
        <input
          type="text"
          name="password"
          //   value={this.state.address1}
          placeholder="密碼"
        />
      </div>
    );
  }
}
export default Registered;

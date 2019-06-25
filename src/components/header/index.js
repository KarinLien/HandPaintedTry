import React from "react";
import Bar from "../Bar";

const Btn = () => {
  return <span>MENU</span>;
};
const BarContent = props => {
  return (
    <div>
      <div onClick={() => props.closeClick()}>
        <span>X</span>
      </div>
    </div>
  );
};
export default class Header extends React.Component {
  state = {
    open: false
  };
  render() {
    const { open } = this.state;
    return (
      <div className="header">
        <div
          style={{ margin: "1% 10px", display: "inline-block" }}
          onClick={() => {
            this.setState({
              open: true
            });
          }}
        >
          <Btn />
        </div>
        <Bar
          open={open}
          content={
            <BarContent
              closeClick={() => {
                this.setState({ open: false });
              }}
            />
          }
        />
        <div className="right-side">
          <wired-icon-button className="pinkbg wired-rendered">
            favorite
          </wired-icon-button>
          <wired-icon-button className="pinkbg wired-rendered">
            close
          </wired-icon-button>
          <wired-icon-button className="pinkbg wired-rendered">
            star
          </wired-icon-button>
        </div>
        <div className="clear" />
      </div>
    );
  }
}

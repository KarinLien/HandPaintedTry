import React from "react";

class ListData extends React.Component {
  state = {
    buyWhat: false
  };
  openBuyWhat = () => {
    this.setState({
      buyWhat: true
    });
  };
  render() {
    const { data } = this.props;
    const { buyWhat } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid gray",
          flexWrap: "wrap"
        }}
      >
        <p style={{ width: "5%" }}>{data.id}</p>
        <p style={{ width: "12%" }}>{data.name}</p>
        <p style={{ width: "10%" }}>{data.birth}</p>
        <p style={{ width: "15%" }}>{data.phone}</p>
        <p style={{ width: "20%" }}>{data.address}</p>
        <p
          style={{
            border: "1px solid black",
            color: "white",
            background: "black",
            width: "10%",
            textAlign: "center",
            padding: "10px",
            cursor: "pointer"
          }}
          onClick={this.openBuyWhat}
        >
          查看明細
        </p>

        <div
          style={{
            width: "100%",
            display: "block",
            position: "relative",
            maxHeight: buyWhat ? "200px" : "0",
            transition: buyWhat
              ? "max-height 0.15s ease-out"
              : "max-height 0.25s ease-in",
            overflow: "hidden"
          }}
        >
          <p
            style={{
              position: "absolute",
              right: "0",
              width: "25px",
              height: "25px",
              cursor: "pointer"
            }}
            onClick={() => {
              this.setState({
                buyWhat: false
              });
            }}
          >
            X
          </p>
          {data.buy.map(item => (
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              key={item.productnumber}
            >
              <p>編號:{item.productnumber}</p>
              <p>價錢:{item.productprice}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ListData;

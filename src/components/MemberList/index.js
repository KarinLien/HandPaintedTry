import React from "react";
import ListData from "./ListData";
import "./style.css";

const member = [
  {
    id: "001",
    name: "001",
    birth: "1991.06.06",
    phone: "0919-111-222",
    address: "taipei",
    buy: [
      {
        productnumber: "80202222-5",
        productprice: "590"
      },
      {
        productnumber: "802022444-5",
        productprice: "390"
      },
      {
        productnumber: "55411128-5",
        productprice: "590"
      }
    ]
  },
  {
    id: "002",
    name: "002",
    birth: "1997.06.04",
    phone: "0989-555-666",
    address: "tainan",
    buy: [
      {
        productnumber: "789456123-7",
        productprice: "190"
      },
      {
        productnumber: "451216458-0",
        productprice: "290"
      },
      {
        productnumber: "55411128-5",
        productprice: "590"
      }
    ]
  }
];
class MemberList extends React.Component {
  render() {
    return (
      <div className="member-list">
        <div className="list-title">
          <p style={{ width: "5%" }} />
          <p style={{ width: "12%" }}>姓名</p>
          <p style={{ width: "10%" }}>生日</p>
          <p style={{ width: "15%" }}>電話</p>
          <p style={{ width: "20%" }}>地址</p>
          <p style={{ width: "10%" }}>購買明細</p>
        </div>
        {member.map(item => (
          <ListData data={item} key={item.id} />
        ))}
      </div>
    );
  }
}
export default MemberList;

import React from "react";
import "./style.css";
class ProductList extends React.Component {
  render() {
    return (
      <div className="check-product-list">
        <div className="check-product-title">
          <p style={{ width: "60%" }}>已選購貨品</p>
          <p style={{ width: "20%" }}>折扣</p>
          <p style={{ width: "20%" }} className="text-align-right">
            單價
          </p>
        </div>
        <div className="big-product-check-list">
          <div className="product-check-list-content">
            <div className="product-img">
              <div>IMG</div>
            </div>
            <div className="product-data">
              <p className="product-text-fontsize-16">
                「龍鳳篇」999.9黃金手鐲
              </p>
              <p className="product-text-fontsize-12">款號 #: 58864K-24KG</p>
              <p className="product-text-fontsize-12">尺碼: 07</p>
              <p className="product-text-fontsize-12">重量: 17.94 錢</p>
              <p className="product-text-fontsize-12">數量: 1</p>
              <div className="product-metrial">
                <p className="nowrap">手繩:</p>
                <div>
                  粉藍X粉紅(纖維材質),15公分
                  <br />
                  <span className="cursor">
                    <u>修改</u>
                  </span>
                  <span className="cursor">
                    <u>移除</u>
                  </span>
                  <span className="product-metrial-price">NT$400</span>
                </div>
              </div>
              <p className="product-text-fontsize-12">7天無理由退換貨</p>
            </div>
          </div>
          <div className="member-count  margin-top-60">
            <p className="product-text-fontsize-12 ">尊尚會員優惠</p>
          </div>
          <div className="total-price">
            <p className="text-align-right">X</p>
            <p className="text-align-right">NT$1,4000</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductList;

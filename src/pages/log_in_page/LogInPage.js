import React, { useState } from "react";
import { Link } from "react-router-dom";
export default LogInPage;
function LogInPage(props) {
  const [amountItem, setAmountItem] = useState(1);
  const [cost, setCost] = useState(20000);
  function amountPlus() {
    setAmountItem(amountItem + 1);
    setCost(cost + 1);
  }
  function amountMinus() {
    if (amountItem > 1) {
      setAmountItem(amountItem - 1);
      setCost(cost - 1);
    }
  }
  return (
    <section id="LogInPage">
      <div className="page_content">
        <p>
          WARRIORS & VIKINGS BATTLE IT OUT TO FIND OUT WHO REIGNS SUPREME.{" "}
          <br /> $SILVER IS AT STAKE AND RICHES ARE READY FOR EVERYONE.
        </p>

        <ul className="ul_list_wrapper">
          <li>
            <p>MINT</p>
          </li>
          <li>
            <p>MINT + STAKE</p>
          </li>
          <li className="btn_cost_action_list">
            <div className="amount_control">
              AMOUNT : <span onClick={() => amountMinus()}> &lt;</span>{" "}
              {amountItem} <span onClick={() => amountPlus()}> &gt;</span>
            </div>
            <span className="cost_value">COST : {cost} </span>
          </li>
        </ul>
      </div>

      <DiamondImageControl></DiamondImageControl>
    </section>
  );
}

function DiamondImageControl() {
  return (
    <div className="diamong_image_wrapper">
      <div className="diamond_1"></div>
      <div className="steel_1"></div>
      <div className="shield_wrapper">
        <h2>GAME STATS</h2>
        <table>
          <tr>
            <td>WARRIORS MINTED</td>
            <td>1237591</td>
          </tr>
          <tr>
            <td>WARRIORS STAKED</td>
            <td>1237591</td>
          </tr>
          <tr>
            <td>VIKINGS MINTED</td>
            <td>1237591</td>
          </tr>
          <tr>
            <td>VIKINGS STAKED</td>
            <td>1237591</td>
          </tr>
          <tr>
            <td>STOLEN WARRIORS</td>
            <td>1237591</td>
          </tr>
          <tr>
            <td>STOLEN VIKINGS</td>
            <td>1237591</td>
          </tr>
        </table>
      </div>

      <div className="shield_wrapper_2">
        <h2>YOUR STATS</h2>
        <div className="shield_content_wrapper">
          <div className="content">
            <div className="content_head">
              <span>SILVER POUCH</span>
              <span>$100000000</span>
            </div>
          </div>
          <div className="content_img_wrapper">
            <SmImgShield src={require("../../assets/img/sm_diamond1.png").default} name="UNSTAKED"></SmImgShield>
            <SmImgShield src={require("../../assets/img/sm_diamond1.png").default} name="WARRIOR BATTALION"></SmImgShield>
            <SmImgShield src={require("../../assets/img/sm_diamond2.png").default} name="VIKINGS CREW"></SmImgShield>
          </div>
        </div>
      </div>
      <div className="btn_control">
        <Link to="/roadmap" className="btn_roadmap">
          ROADMAP
        </Link>
      </div>
    </div>
  );
}

function SmImgShield({name, src}) {
  return (
    <div className="item">
      <span>{name}</span>
      <div className="img_container">
        <div className="box">
          <div className="img_item">
            <img
              src={src}
              alt="img"
            />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img
              src={src}
              alt="img"
            />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img
              src={src}
              alt="img"
            />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img
              src={src}
              alt="img"
            />
            <span>10,000</span>
          </div>
          <div className="img_item">
            <img
              src={src}
              alt="img"
            />
            <span>10,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

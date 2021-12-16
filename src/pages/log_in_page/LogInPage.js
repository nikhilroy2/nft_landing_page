import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
export default LogInPage;
function LogInPage(props) {
  const [amountItem, setAmountItem] = useState(1);
  const [cost, setCost] = useState(20000);
  function amountPlus() {
    setAmountItem(amountItem + 1);
    setCost(cost + 20000);
  }
  function amountMinus() {
    if (amountItem > 1) {
      setAmountItem(amountItem - 1);
      setCost(cost - 20000);
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
          <li className="list_btn btn_animate">
            <p>MINT</p>
          </li>
          <li className="list_btn btn_animate">
            <p>MINT + STAKE</p>
          </li>
          <li className="btn_cost_action_list">
            <div className="amount_control">
              <span className="amount_btn">AMOUNT :</span>
              <div className="amount_btn">
                <span className="btn_animate" onClick={() => amountMinus()}>
                  {" "}
                  &lt;
                </span>{" "}
                {amountItem}{" "}
                <span className="btn_animate" onClick={() => amountPlus()}>
                  {" "}
                  &gt;
                </span>
              </div>
            </div>
            <span className="cost_value btn_animate">COST : {cost} </span>
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
      <div className="diamond_1 diamond_1_copy d-sm-none"></div>
      <div className="steel_1"></div>
      <div className="shield_wrapper">
        <h2>GAME STATS</h2>
        <table cellSpacing="0" cellPadding="0">
          <tbody>
            <tr>
              <td>
                <b>WARRIORS MINTED</b>
              </td>
              <td>
                <b>1237591</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>WARRIORS STAKED</b>
              </td>
              <td>
                <b>1237591</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>VIKINGS MINTED</b>
              </td>
              <td>
                <b>1237591</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>VIKINGS STAKED</b>
              </td>
              <td>
                <b>1237591</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>STOLEN WARRIORS</b>
              </td>
              <td>
                <b>1237591</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>STOLEN VIKINGS</b>
              </td>
              <td>
                <b>1237591</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="shield_wrapper_2">
        <h2>YOUR STATS</h2>
        <div className="shield_content_wrapper">
          <div className="content">
            <div className="content_head">MY SILVER : $100000000</div>
          </div>
          <div className="content_img_wrapper">
            <SmImgShield
              src={require("../../assets/img/sm_diamond1.png").default}
              name="INVENTORY"
            ></SmImgShield>
            <SmImgShield
              src={require("../../assets/img/sm_diamond1.png").default}
              name="WARRIOR BATTALION"
            ></SmImgShield>
            <SmImgShield
              src={require("../../assets/img/sm_diamond2.png").default}
              name="VIKINGS CREW"
            ></SmImgShield>
          </div>
        </div>
        <div className="shield_btn_wrapper">
          <button className="btn_animate">CLAIM SILVER</button>
          <button className="btn_animate">CLAIM & UNSTAKE</button>
        </div>
      </div>
      {/* <div className="btn_control">
        <Link to="/roadmap" className="btn_roadmap">
          ROADMAP
        </Link>
      </div> */}
    </div>
  );
}

function SmImgShield({ name, src }) {
  //const [manSelect, setManSelect] = useState(false);

  function selectManFunc(v) {
    Array.from(v.target.parentElement.children).forEach((v) =>
      v.classList.remove("active_item")
    );
    v.target.classList.add("active_item");
  }
  return (
    <div className="item">
      <span>{name}</span>

      <div className="img_container">
        <button className="redu_btn btn_animate">
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.29578 1.70421C7.44994 0.858374 6.28911 0.333374 4.99994 0.333374C2.42161 0.333374 0.339111 2.42171 0.339111 5.00004C0.339111 7.57837 2.42161 9.66671 4.99994 9.66671C7.17578 9.66671 8.98994 8.17921 9.50911 6.16671H8.29578C7.81744 7.52587 6.52244 8.50004 4.99994 8.50004C3.06911 8.50004 1.49994 6.93087 1.49994 5.00004C1.49994 3.06921 3.06911 1.50004 4.99994 1.50004C5.96828 1.50004 6.83161 1.90254 7.46161 2.53837L5.58328 4.41671H9.66661V0.333374L8.29578 1.70421Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="box">
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
          <div className={`img_item`} onClick={(event) => selectManFunc(event)}>
            <img src={src} alt="img" />
            <span>10,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

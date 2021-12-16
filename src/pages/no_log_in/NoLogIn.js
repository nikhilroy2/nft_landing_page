import React, { useState } from "react";
import { Link } from "react-router-dom";
function NoLogIn(props) {
  return (
    <section id="NoLogIn">
      <p className="d-none d-sm-block">
        WARRIORS & VIKINGS BATTLE IT OUT TO FIND OUT WHO REIGNS SUPREME. <br />{" "}
        $SILVER IS AT STAKE AND RICHES ARE READY FOR EVERYONE.
      </p>

      <div className="diamong_image_wrapper">
        <img
          className="diamond_1"
          src={require("../../assets/img/diamond_1.png").default}
          alt="diamond_1"
        />
        <img
          className="diamond_1 diamond_1_copy d-sm-none"
          src={require("../../assets/img/diamond_1.png").default}
          alt="diamond_1"
        />
        <img
          className="steel_1"
          src={require("../../assets/img/steel_1.png").default}
          alt="steel_1"
        />
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
        {/* <div className="btn_control_top btn_control d-sm-none">
          <Link to="/roadmap" className="btn_roadmap">
            CONNECT WALLET
          </Link>
        </div>

        <div className="btn_control">
          <Link to="/roadmap" className="btn_roadmap">
            ROADMAP
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export default NoLogIn;

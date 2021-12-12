import React from "react";
import { Link } from "react-router-dom";
function NoLogIn(props) {
  return (
    <section id="NoLogIn">
      <p>
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
          className="steel_1"
          src={require("../../assets/img/steel_1.png").default}
          alt="steel_1"
        />
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
        <div className="btn_control">
          <Link to="/roadmap" className="btn_roadmap">
            ROADMAP
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NoLogIn;

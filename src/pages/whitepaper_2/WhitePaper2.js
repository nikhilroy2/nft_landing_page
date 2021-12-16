import React from "react";

function WhitePaper2(props) {
  return (
    <section id="WhitePaper2">
      <h1>Whitepaper</h1>
      <h2>Game Details</h2>
      <div id="about_game_details">
        <img
          src={require("../../assets/img/social_art_game.png").default}
          alt="img"
        />
        <p>
          Arena Royale is a game in which players stake their warriors to earn
          SILVER which can be used for multiple functionalities. Along with such
          players can use their warriors to fight in the arena and earn more
          silver.
        </p>
      </div>

      <h2>SILVER Token</h2>
      <div id="silver_token">
        <p>
          $Silver supply is 5,000,000,000:
          <br />
          <br />
          When supply reaches 2,400,000,000 $silver earned for staking, the
          staking “faucet” turns off.
          <br />
          <br />
          The developers will receive 600,000,000 $silver.
          <br />
          <br />
          Community Rewards will be allocated 2,000,000,000 $silver.
        </p>
        <img
          src={require("../../assets/img/social_art2.png").default}
          alt="img"
        />
      </div>

      <h2>Warrior Atributes</h2>
      <div id="warrior_attributes">
        <img
          src={require("../../assets/img/social_art3.png").default}
          alt="img"
        />
        <p>
          Each warrior is minted with a set of armor and attack weapons that
          come of different rarity. Each type and rarity is allocated a special
          ranking and thus decides the power of your warrior. These elements
          will effect the battle ability of your NFT in the ARENA.
        </p>
      </div>
      <div id="rarity_ranking_wrapper">
        <h2 className="title">RARITY RANKING</h2>
        <ul>
          <li>
            <h2>DIAMOND</h2>
          </li>
          <li>
            <h2>STEEL</h2>
          </li>
          <li>
            <h2>GOLD</h2>
          </li>
          <li>
            <h2>BRONZE</h2>
          </li>
          <li>
            <h2>IRON</h2>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default WhitePaper2;

import React from "react";

function RoadMap(props) {
  return (
    <section id="RoadMap">
      <h1>ROADMAP</h1>
      <div className="roadMap_lineWrapper">
        <div className="road_line_1">
          <div className="line"></div>
          <div className="line_text">
            <h2>LAUNCH</h2>
            <p>First generation Warriors are avaiable to mint and stake</p>
          </div>
        </div>
        <div className="road_line_2">
          <div className="line_text">
            <h2>ARENA MODE</h2>
            <p>
              Arena mode in which warriors are able to battle each other and put
              SILVER on the line{" "}
            </p>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  );
}

export default RoadMap;

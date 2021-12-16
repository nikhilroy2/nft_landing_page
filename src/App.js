import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import Whitepaper from "./pages/whitepaper/Whitepaper";
import WhitePaper2 from "./pages/whitepaper_2/WhitePaper2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoadMap from "./pages/roadmap/RoadMap";
import NoLogIn from "./pages/no_log_in/NoLogIn";
import LogInPage from "./pages/log_in_page/LogInPage";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const [appBg, setAppBg] = useState(false);
  let getBg = useLocation().pathname;
  useEffect(() => {
    if (getBg === "/" || getBg === "/log_in_page") {
      //console.log('true')
      setAppBg(true);
    } else {
      //console.log('false')
      setAppBg(false);
    }
  },[getBg]);
  return (
    <div className={`App ${appBg ? "appBg" : ""}`}>
      <div id="container_layout">
        <Layout>
          <Routes>
            <Route path="/" element={<NoLogIn />} />
            {/* <Route path="whitepaper" element={<Whitepaper />} /> */}
            <Route path="whitepaper" element={<WhitePaper2 />} />
            <Route path="roadmap" element={<RoadMap />} />
            <Route path="log_in_page" element={<LogInPage />} />
          </Routes>
        </Layout>
      </div>
    </div>
  );
}

export default App;

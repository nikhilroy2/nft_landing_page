import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import Whitepaper from "./pages/whitepaper/Whitepaper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoadMap from "./pages/roadmap/RoadMap";
import NoLogIn from "./pages/no_log_in/NoLogIn";
import LogInPage from "./pages/log_in_page/LogInPage";
function App() {
  return (
    <div className="App">
      <div id="container_layout">
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Whitepaper />} />
              <Route path="roadmap" element={<RoadMap />} />
              <Route path="no_log_in" element={<NoLogIn />} />
              <Route path="log_in_page" element={<LogInPage />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Layout from "./layout/Layout";
import Whitepaper from "./pages/whitepaper/Whitepaper";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoadMap from "./pages/roadmap/RoadMap";
function App() {
  return (
    <div className="App">
      <div id="container_layout">
        <Layout>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Whitepaper />} />
              <Route path="roadmap" element={<RoadMap />} />
            </Routes>
          </BrowserRouter>
        </Layout>
      </div>
    </div>
  );
}

export default App;

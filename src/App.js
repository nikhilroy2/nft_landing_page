import logo from './logo.svg';
import './App.css';
import Layout from './layout/Layout';
import Whitepaper from './pages/whitepaper/Whitepaper';
function App() {
  return (
    <div className="App">
      <div id="container_layout">
        <Layout>
          <Whitepaper></Whitepaper>
        </Layout>
      </div>
    </div>
  );
}

export default App;

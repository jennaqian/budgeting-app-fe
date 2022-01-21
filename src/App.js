import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />

          <main>
            <Routes>
              <Route exact path="/" />
            </Routes>
          </main>
        </Router>
    

    </div>
  );
}

export default App;

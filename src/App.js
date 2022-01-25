import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Components/Navbar.js"
import Home from "./Pages/Home.js"
import Index from "./Pages/Index.js"
import Show from "./Pages/Show.js"
import Edit from "./Pages/Edit.js"

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar />

          <main>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/transactions" element={<Index />}/>
              <Route path="/transactions/:index" element={<Show />}/>
              <Route path="/transactions/:index/edit" element={<Edit />}/>
            </Routes>
          </main>
        </Router>
    

    </div>
  );
}

export default App;

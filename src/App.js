import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./appComponents/Navbar.js"
import Home from "./Pages/Home.js"
import Index from "./Pages/Index.js"
import Show from "./Pages/Show.js"
import Edit from "./Pages/Edit.js"
import FourOFour from "./Pages/FourOFour.js"
import New from "./Pages/New.js"

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
              <Route path="/transactions/new" element={<New />}/>
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
    

    </div>
  );
}

export default App;

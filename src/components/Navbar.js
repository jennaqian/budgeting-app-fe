import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h1>
        <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/20/20687.png" alt="Money Logo" className="logoImg"/></Link>
      </h1>
      <h1>
        <Link to="/transactions">$ ＄ $</Link>
      </h1>
      <h1>
        <Link to="/transactions/new"><img src="https://freesvg.org/img/Contact-icon.png" alt="Notepad logo" className="logoImg"/></Link>
      </h1> 
    </nav>
  );
}


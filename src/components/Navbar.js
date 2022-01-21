import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <h1>
        <Link to="/budget">Budget App</Link>
      </h1>
      <h1>
        <Link to="/budget/new"><button>New Transaction</button></Link>
      </h1> 
    </nav>
  );
}

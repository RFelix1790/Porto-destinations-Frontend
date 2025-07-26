import { Link } from "react-router-dom";
import logo from "../assets/portoImg.jpg";
function NavBar() {
  return (
    <nav>
      <Link to="/">
        <img alt="logo" src={logo} id="logo" />
      </Link>
      <h1>Porto</h1>
      <Link to="/all-Destinations">Best spots in town</Link>
      <Link to="/add-destination">Add Destination</Link>
      <Link to="/about">About us</Link>
    </nav>
  );
}

export default NavBar;

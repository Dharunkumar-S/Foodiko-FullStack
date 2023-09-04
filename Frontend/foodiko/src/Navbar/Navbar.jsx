import "./Navbar.css";
import Logo from "../assets/foodiKo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <div className="navbar1">
        <div className="homeimg">
          <img className="homelogo" src={Logo} alt="foodiko"></img>
        </div>
        <div className="navbar">
          <ul>
            <li><Link className="link" to="/">Home</Link></li>
            <li><Link className="link" to="/cart">Cart</Link></li>
            <li><Link className="link" to="/menu">Menu</Link></li>
            <li><Link className="link" to="/admin">Admin</Link></li>
            <li><Link className="link" to="/signup">Signup</Link></li>
            <li><Link className="link" to="/login">login</Link></li>
          </ul>
          <Link to="/profile">
            <AccountCircleIcon className="account-icon" sx={{ fontSize: 32 }} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

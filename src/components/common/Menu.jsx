import { Link } from "react-router-dom";

const Menu = ({type , onMenuItemClick}) => {
  return (
    <div className={type==="mobile" ? "mobile-menu" : "menu"}>
      <ul>
        <li>
          <Link to="" onClick={onMenuItemClick}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={onMenuItemClick}>About</Link>
        </li>
        <li>
          <Link to="/service" onClick={onMenuItemClick}>Services</Link>
        </li>
        <li>
          <Link to="/contact-us" onClick={onMenuItemClick}>Contact us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

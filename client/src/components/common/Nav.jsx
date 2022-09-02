import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <header>
      <div className="top-nav container">
        <div className="logo">
          <NavLink exact to="/">
            MERN Ecommerce
          </NavLink>
        </div>

        <NavLinks />
      </div>
    </header>
  );
};

export default Nav;

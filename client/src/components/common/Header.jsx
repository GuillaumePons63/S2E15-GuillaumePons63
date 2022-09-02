import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="with-background">
      <div className="top-nav container">
        <div className="logo">
          <NavLink exact="true" to="/">
            React / Express / REDIS Ecommerce
          </NavLink>
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;

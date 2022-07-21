import React from "react";
import logo from "../images/amazon-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { Search, ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  // console.log(basket);

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header__sticky">
      <nav className="header">
        {/* Header logo */}
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>

        {/* header search bar */}
        <div className="header__search">
          <input
            type="text"
            className="header__searchInput"
            placeholder="Search any item "
          />
          <Search className="header__searchIcon" />
        </div>

        {/* 4 links */}
        <div className="header__nav">
          {/* 1st link */}
          <Link to={!user && "/login"} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">
                Hello {user?.email ? user?.email.match(/^.*(?=@)/) : "Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          {/* 2nd link */}
          <Link to="/checkout" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3rd link */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* 4th link */}
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <ShoppingBasket />
              {/* no. of items in basket */}
              <span className="header__optionLineTwo basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;

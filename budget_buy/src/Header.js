import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider"

function Header() {
  const [{ basket }, dispatch] = useStateValue()

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://www.linkpicture.com/q/bb_logo.png"
        ></img>
      </Link>
      <div className="header_nav">
        <div className="header_option">
          {/* <span className="header_optionLineOne">Hello</span> */}
          <span className="header_optionLineTwo">Men</span>
        </div>
        <div className="header_option">
          {/* <span className="header_optionLineOne">Track</span> */}
          <span className="header_optionLineTwo">Women</span>
        </div>
        <div className="header_option">
          {/* <span className="header_optionLineOne">Your</span> */}
          <span className="header_optionLineTwo">Kids</span>
        </div>
        <div className="header_option">
          {/* <span className="header_optionLineOne">Your</span> */}
          <span className="header_optionLineTwo">Offers</span>
        </div>
      </div>
      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
        {/* Logo */}
      </div>

      <div className="header_nav">
        <Link to="/login">
          <div className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">Sign In</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Track</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Wishlist</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header_optionBasket">
          {/* <ShoppingCartIcon /> */}
          <img className="kartImg" src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG4.png"></img>
          <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
        </div></Link>
    </div>
  );
}

export default Header;

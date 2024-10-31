import React from "react";
import "./header.css";
import { BsTelephone } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BiCart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa"; 
import { useSelector } from "react-redux";
import Search from "./search/Search";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

const Header = () => {
  const navigate = useNavigate();
  
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const handleCartClick = () => {
    navigate(`/cart`);
  };

  const handleFavoritesClick = () => {
    navigate(`/favorites`);
  };

  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header_top">
            <div className="contact-info">
              <BsTelephone className="icon" />
              <p>8 (812) 123-45-67</p>
              <p>Работаем 7 дней в неделю</p>
              <p>9:00 — 18:00</p>
            </div>
            <div className="auth-links">
              <TbLogin2 className="icon2" />
              <NavLink to="/login" className="login-link">Войти</NavLink>
              <span> / </span>
              <NavLink to="/register" className="login-link">Регистрация</NavLink>
            </div>
          </div>
          <div className="header_bottom">
            <img src={logo} alt="PORTEN Logo" />
            <div className="nav">
              <NavMenu />
              <div className="header-icons">
                <div className="cart-icon-container" onClick={handleCartClick}>
                  <BiCart className="iconCard" />
                  {cartItemsCount > 0 && (
                    <span className="cart-count">{cartItemsCount}</span>
                  )}
                </div>
                <div className="cart-icon-container" onClick={handleFavoritesClick}>
                  <FaRegHeart className="iconCard" />
                  {favoritesCount > 0 && (
                    <span className="cart-count">{favoritesCount}</span>
                  )}
                </div>
                <Search />
              </div>
            </div>
          </div>
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;

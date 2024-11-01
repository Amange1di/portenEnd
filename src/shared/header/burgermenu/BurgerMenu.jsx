
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";
import { BiCart } from "react-icons/bi";
import Search from "../search/Search";
import { headerMenu } from "../constants";
import "../header.css"
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa";
const BurgerMenu = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const cartItemsCount = useSelector((state) => state.cart.items.length);
  const favoritesCount = useSelector((state) => state.favorites.items.length);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleCartClick = () => {
    navigate(`/cart`);
  };
  const handleFavoritesClick = () => {
    navigate(`/favorites`);
  };
  return (
    <div className="burger-menu">
      <input
        id="menu__toggle"
        type="checkbox"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className={`menu__box ${isOpen ? 'open' : ''}`}>
        <div className="header_top">
          <div className="contact-info">
            <p><BsTelephone className="icon" /> 8 (812) 123-45-67</p>
            <p>Работаем 7 дней в неделю</p>
            <p>9:00 — 18:00</p>
          </div>
        </div>
        {headerMenu.map((page) => (
          <li key={page.name}>
            <NavLink className="menu__item" to={page.path}>
              {page.name}
            </NavLink>
          </li>
        ))}
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
        <div className="auth-links">
          <TbLogin2 className="icon2" />
          <NavLink to="/login" className="login-link">Войти</NavLink>
          <span> / </span>
          <NavLink to="/register" className="login-link">Регистрация</NavLink>
        </div>
      </ul>
    </div>
  );
};

export default BurgerMenu;

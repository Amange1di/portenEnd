
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";
import { BiCart } from "react-icons/bi";
import Search from "../search/Search";
import { headerMenu } from "../../constants";
import "../header/header.css"
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <BiCart className="iconCard" />
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

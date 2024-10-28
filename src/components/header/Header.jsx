// Header.js
import "./header.css";
import { BsTelephone } from "react-icons/bs";
import { TbLogin2 } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { headerMenu } from "../../constants";
import { BiCart } from "react-icons/bi";
import Search from "../search/Search";
import BurgerMenu from "../burgerMenu/BurgerMenu";


const Header = () => {
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
              {headerMenu.map((page) => (
                <NavLink key={page.name} to={page.path} className="link">
                  {page.name}
                </NavLink>
              ))}
              <div className="header-icons">
                <BiCart className="iconCard" />
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

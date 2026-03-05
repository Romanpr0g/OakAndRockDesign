import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../../assets/svg/logo.svg";
import HeaderArrow from "../../../assets/svg/headerArrow.svg?react";
import s from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className={s.header}>
      <div className={`container ${s.inner}`}>
        <Link to="/" className={s.logo}>
          <img src={logo} className={s.logoSvg} alt="logo" />
        </Link>

        <nav className={s.nav}>
          <Link to="/catalog">Каталог</Link>

          <div
            className={s.dropdownWrapper}
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
          >
            <span className={s.navLink}>Услуги</span>
            <HeaderArrow className={s.arrow} />
            {isMenuOpen && (
              <div className={s.dropdown}>
                <Link to="/services/interiors">Интерьеры под ключ</Link>
                <Link to="/services/designers">
                  Для дизайнеров и архитекторов
                </Link>
              </div>
            )}
          </div>

          <Link to="/portfolio">Портфолио</Link>
          <HashLink smooth to="/#about">О нас</HashLink>
          <Link to="/contacts">Контакты</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

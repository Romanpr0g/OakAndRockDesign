import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/svg/logo.svg?react";
import LogoName from "../../../assets/svg/logoName.svg?react";
import HeaderArrow from "../../../assets/svg/headerArrow.svg?react";
import s from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  const headerRef = useRef(null);
  const leaveTimer = useRef(null);
  const navigate = useNavigate();

  const location = useLocation();

  const handleDesignersClick = (e) => {
    e.preventDefault();
    closeMobileMenu();

    if (location.pathname === "/") {
      // уже на главной — плавно скроллим
      const el = document.getElementById("designers");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // с другой страницы — переходим на главную с параметром
      navigate("/?scrollTo=designers");
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const headerHeight = header.offsetHeight;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        header.classList.remove(s.headerFixed);
        document.body.style.paddingTop = "0px";
      } else if (currentScroll > headerHeight) {
        if (!header.classList.contains(s.headerFixed)) {
          header.classList.add(s.headerFixed);
          document.body.style.paddingTop = `${headerHeight}px`;
        }
      }
    };

    const handleResize = () => {
      if (header.classList.contains(s.headerFixed)) {
        document.body.style.paddingTop = `${header.offsetHeight}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(leaveTimer.current);
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimer.current = setTimeout(() => setMenuOpen(false), 150);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(false);
  };

  return (
    <header className={s.header} ref={headerRef}>
      <div className={`container ${s.inner}`}>
        <Link to="/" className={s.logo} onClick={closeMobileMenu}>
          <Logo className={s.logoIcon} />
          <LogoName className={s.logoName} />
        </Link>

        <button
          className={`${s.burgerBtn} ${isMobileMenuOpen ? s.active : ""}`}
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Меню"
        >
          <svg
            className={`${s.ham} ${isMobileMenuOpen ? s.hamActive : ""}`}
            viewBox="0 0 100 100"
            width="44"
          >
            <path
              className={`${s.line} ${s.lineTop}`}
              d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
            />
            <path className={`${s.line} ${s.lineMiddle}`} d="m 30,50 h 40" />
            <path
              className={`${s.line} ${s.lineBottom}`}
              d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
            />
          </svg>
        </button>

        <nav
          className={`${s.nav} ${isMobileMenuOpen ? s.navMobileActive : ""}`}
        >
          <Link
            to="/"
            className={`${s.navItem} ${location.pathname === "/" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            Главная
          </Link>

          <span className={s.separator}>|</span>

          <Link
            to="/catalog"
            className={`${s.navItem} ${location.pathname === "/catalog" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            Каталог
          </Link>

          <span className={s.separator}>|</span>

          <div
            className={`${s.dropdownWrapper} ${isMobileSubmenuOpen ? s.mobileSubmenuOpen : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setMobileSubmenuOpen(!isMobileSubmenuOpen)}
          >
            <div className={s.servicesLabel}>
              <span
                className={`${s.navItem} ${
                  location.pathname.startsWith("/services") ? s.active : ""
                }`}
              >
                Услуги
              </span>
              <HeaderArrow className={s.arrow} />
            </div>

            <div
              className={`${s.desktopDropdown} ${isMenuOpen ? s.desktopDropdownVisible : ""}`}
            >
              <Link to="/services/interiors" onClick={closeMobileMenu}>
                Интерьеры под ключ
              </Link>
              <a href="#designers" onClick={handleDesignersClick}>
                Для дизайнеров и архитекторов
              </a>
            </div>

            <div className={s.mobileDropdown}>
              <Link to="/services/interiors" onClick={closeMobileMenu}>
                Интерьеры под ключ
              </Link>
              <a href="#designers" onClick={handleDesignersClick}>
                Для дизайнеров и архитекторов
              </a>
            </div>
          </div>

          <span className={s.separator}>|</span>

          <Link
            to="/contacts"
            className={`${s.navItem} ${location.pathname === "/contacts" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            О нас
          </Link>

          <span className={s.separator}>|</span>

          <Link
            to="/blog"
            className={`${s.navItem} ${location.pathname === "/blog" ? s.active : ""}`}
            onClick={closeMobileMenu}
          >
            Блог
          </Link>
        </nav>

        <Link to="/contacts" className={s.ctaBtn} onClick={closeMobileMenu}>
          Заказать звонок
        </Link>
      </div>
    </header>
  );
};

export default Header;

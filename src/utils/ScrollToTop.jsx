import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const scrollTo = params.get("scrollTo");

    if (scrollTo) {
      // Дождаться рендера страницы, потом плавно скроллить к секции
      const timeout = setTimeout(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Обычный переход — мгновенно наверх
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}
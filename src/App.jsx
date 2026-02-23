import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Interiors from "./pages/Interiors";
import ScrollToTop from "./utils/ScrollToTop";

// Заглушка для страницы интерьеров
// const InteriorProcess = () => (
//   <div className="container" style={{ paddingTop: 150, minHeight: "60vh" }}>
//     <h1 className="serif">Страница: Интерьеры под ключ</h1>
//     <p>Здесь будет описание процесса и слайдер...</p>
//   </div>
// );

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/services/interiors" element={<Interiors />} />
            <Route
              path="*"
              element={<div style={{ padding: 150 }}>404 Not Found</div>}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

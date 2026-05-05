import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Interiors from "./pages/Interiors";
import ScrollToTop from "./utils/ScrollToTop";
import CategoryPage from "./components/Catalog/CategoryPage/CategoryPage";
import ProductDetails from "./components/Catalog/ProductDetails/ProductDetails";

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
            <Route path="/catalog/:categoryId" element={<CategoryPage />} />
            <Route path="/catalog/:categoryId/:itemId" element={<ProductDetails />} />
            <Route path="/services/interiors" element={<Interiors />} />
            <Route
              path="*"
              element={<div style={{ padding: 150 }}>404 Not Found</div>}
            />
          </Routes>
        </main>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
import React from "react";

const Catalog = () => {
  return (
    <div style={{ paddingTop: 120, minHeight: "100vh", background: "#121212" }}>
      <div className="container">
        <h2 className="serif" style={{ fontSize: 40, marginBottom: 40 }}>
          Каталог
        </h2>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30 }}
        >
          {["Корпусная мебель", "Столы", "Кухни", "Декор"].map((item) => (
            <div
              key={item}
              style={{
                background: "#0a0a0a",
                border: "1px solid #222",
                padding: 40,
                height: 250,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              <h3 className="serif" style={{ fontSize: 28 }}>
                {item}
              </h3>
              <span className="text-gold" style={{ fontSize: 24 }}>
                ⟶
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Catalog;

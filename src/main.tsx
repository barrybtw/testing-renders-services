import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>Hello is home page</>} />
          <Route path="/other" element={<div>Hello is other page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Normal from "./pages/NormalPage";
import Offscreen from "./pages/OffscreenPage";

const baseUrl = "/r3f-offscreen";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`${baseUrl}/`} element={<Normal />} />
        <Route path={`${baseUrl}/offscreen`} element={<Offscreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

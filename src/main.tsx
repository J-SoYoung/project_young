import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Lists, Posts, Search, Write } from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/post/:id" element={<Posts/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/list/:menu" element={<Lists/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

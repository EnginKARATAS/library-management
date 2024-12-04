import React from "react";
import { DialogsProvider } from "@toolpad/core/useDialogs";
import MainPage from "./pages/MainPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
      <DialogsProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </DialogsProvider>
  );
}

export default App;

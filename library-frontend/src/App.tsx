import React from "react";
import { DialogsProvider } from "@toolpad/core/useDialogs";
import MainPage from "./pages/MainPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
      <DialogsProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </DialogsProvider>
  );
}

export default App;

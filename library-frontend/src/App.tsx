import React from "react";
import { DialogsProvider } from "@toolpad/core/useDialogs";
import MainPage from "./pages/MainPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/layout/Header";
import UsersPage from "./pages/UsersPage";
import UserDetail from "./pages/UserDetail";
import store from "./store";
import { Provider } from 'react-redux';
import Snackbar from './components/popup/Snackbar';

function App() {
  return (
    <Provider store={store}>
      <DialogsProvider>
        <Header />
        <Snackbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserDetail />} />
        </Routes>
      </DialogsProvider>
    </Provider>
  );
}

export default App;

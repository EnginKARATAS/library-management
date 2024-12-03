import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.scss";
import MainPage from "./pages/MainPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;

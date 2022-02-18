import "./App.scss";
import Header from "./components/Header";
import NavBarS from "./components/NavBarS";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import { CssBaseline } from "@mui/material";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CssBaseline />
        <Header />
        <NavBarS />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:filtername" element={<HomePage />} />
        <Route path="/postpage/:id" element={<PostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

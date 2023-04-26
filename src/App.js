import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import Checkout from "./pages/checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

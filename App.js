import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Vegetables from "./pages/Vegetables";
import Offers from "./pages/Offers";
import AccountCreation from "./pages/AccountCreation";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app-wrapper">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vegetables" element={<Vegetables />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/accountcreation" element={<AccountCreation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
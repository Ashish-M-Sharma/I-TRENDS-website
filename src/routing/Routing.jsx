import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import EyeGlasses from "../components/EyeGlasses";
import SunGlassess from "../components/SunGlassess";
import ScreenGlasses from "../components/ScreenGlasses";
import ContactLenses from "../components/ContactLenses";
import PowerGlasses from "../components/PowerGlasses";
import ProgressiveLenses from "../components/ProgressiveLenses";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import CartPage from "../components/CartPage";
import { FaWhatsapp } from "react-icons/fa";
import AllGlasses from "../components/AllGlasses";
import AuthPage from "../components/AuthPage";

const Routing = () => {
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/eyeglasses" element={<EyeGlasses />} />
        <Route path="/sunglasses" element={<SunGlassess />} />
        <Route path="/screenglasses" element={<ScreenGlasses />} />
        <Route path="/contactlenses" element={<ContactLenses />} />
        <Route path="/powerglasses" element={<PowerGlasses />} />
        <Route path="/progressivelenses" element={<ProgressiveLenses />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/AllGlasses" element={<AllGlasses />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />

      {/* WhatsApp Icon  */}
      <a
        href="https://wa.link/ivpki9"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-23 right-6 md:bottom-28 md:right-5 lg:bottom-24 lg:right-5 z-50"
      >
        {/* Blinking Effect */}
        <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full animate-ping opacity-75"></div>

        {/* WhatsApp Icon */}
        <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <FaWhatsapp className="text-white text-2xl md:text-3xl" />
        </div>
      </a>

      <ScrollToTopButton />
    </Router>
  );
};

export default Routing;

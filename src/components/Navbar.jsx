import React, { useState, useEffect, useContext, useRef } from "react";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const authRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = navItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (authRef.current && !authRef.current.contains(event.target)) {
        setAuthDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png",
      title: "All Glasses",
      link: "/AllGlasses",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png",
      title: "SunGlasses",
      link: "/sunglasses",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png",
      title: "Screen Glasses",
      link: "/screenglasses",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png",
      title: "Contact Glasses",
      link: "/contactlenses",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
      title: "Power Sunglasses",
      link: "/powerglasses",
    },
    {
      src: "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg",
      title: "Progressive Lenses",
      link: "/progressivelenses",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="logo.jpg"
            alt="Logo"
            className="w-28 md:w-36 outline-none"
          />
        </NavLink>

        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="md:w-[300px] lg:w-[500px] border py-1 px-2 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {filteredResults.length > 0 && (
            <div className="absolute top-10 left-0 w-full bg-white border rounded-md shadow-md max-h-52 overflow-auto z-50">
              {filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => navigate(item.link)}
                >
                  <img src={item.src} alt={item.title} className="w-10 h-10" />
                  <p className="text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-6 items-center">
          <div className="relative" ref={authRef}>
            {/* Sign In/Sign Up  */}
            <button
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 cursor-pointer"
              onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
            >
              <FiUser className="text-lg" />
              Sign In & Sign Up
            </button>

            {/* Dropdown Menu */}
            {authDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50 animate-fade-in">
                <NavLink
                  to="/auth?mode=signin"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                  onClick={() => setAuthDropdownOpen(false)}
                >
                  <FiUser className="text-gray-500" />
                  Sign In
                </NavLink>
                <NavLink
                  to="/auth?mode=signup"
                  className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                  onClick={() => setAuthDropdownOpen(false)}
                >
                  <FiUser className="text-gray-500" />
                  Sign Up
                </NavLink>
              </div>
            )}
          </div>
          <NavLink
            to="/cart"
            className="relative flex items-center gap-1 text-sm cursor-pointer"
          >
            <BsHandbag className="text-lg" />
            <span className="hidden md:block">Cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </NavLink>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiMenu2Line />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

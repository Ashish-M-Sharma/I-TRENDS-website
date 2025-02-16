import React, { useState, useEffect, useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

  const handleSearchSelect = (link) => {
    navigate(link);
    setSearchQuery("");
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <NavLink to="/" onClick={scrollToTop}>
          <img
            src="logo.jpg"
            alt="Logo"
            className="w-28 md:w-36 outline-none"
          />
        </NavLink>

        {/* Search Bar (Hidden on Mobile) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="md:w-[300px] lg:w-[500px] border py-1 px-2 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Search Dropdown */}
          {filteredResults.length > 0 && (
            <div className="absolute top-10 left-0 w-full bg-white border rounded-md shadow-md max-h-52 overflow-auto z-50">
              {filteredResults.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSearchSelect(item.link)}
                >
                  <img src={item.src} alt={item.title} className="w-10 h-10" />
                  <p className="text-sm">{item.title}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex gap-6 items-center">
          {/* Sign In & Sign Up (Visible on Mobile & Tablet) */}
          <NavLink to="/auth">
            <p className="text-sm font-normal cursor-pointer">
              Sign In & Sign Up
            </p>
          </NavLink>

          {/* Cart */}
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

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <RiMenu2Line />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 fixed top-16 left-0 w-full z-50 h-1/2 overflow-y-auto">
          <NavLink to="/auth" className="block py-2 text-center font-semibold">
            Sign In & Sign Up
          </NavLink>
          {navItems.map((item, index) => (
            <NavLink
              to={item.link}
              key={index}
              className="block py-2 text-center"
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      )}

      {/* Main Navigation Section */}
      <nav className="bg-white">
        <div className="flex justify-center pt-36 md:justify-evenly py-4 overflow-x-auto scrollbar-hide space-x-4 md:space-x-0">
          {navItems.map((val, i) => (
            <NavLink to={val.link} key={i} className="flex-shrink-0">
              <div className="w-40 md:w-56 shadow-md px-3 py-2 bg-white rounded-lg">
                <img src={val.src} alt={val.title} className="mx-auto w-24" />
                <p className="text-center p-2 text-sm md:text-[15px] font-sans">
                  {val.title}
                </p>
              </div>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { MdClose } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

const Sunglasses = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [maxPrice, setMaxPrice] = useState(5000);

  const sunglasses = [
    {
      id: 1,
      src: "https://m.media-amazon.com/images/I/612jf9ov0CL._AC_UL480_FMwebp_QL65_.jpg",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      size: "medium",
      gender: "male",
    },
    {
      id: 2,
      src: "https://m.media-amazon.com/images/I/512qF5vdVcL._AC_UL480_FMwebp_QL65_.jpg",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 4290,
      pPrice: 6999,
      size: "small",
      gender: "unisex",
    },
    {
      id: 3,
      src: "https://m.media-amazon.com/images/I/51nH5xk6KOL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 4000,
      pPrice: 5500,
      size: "large",
      gender: "female",
    },
    {
      id: 4,
      src: "https://m.media-amazon.com/images/I/71KcVCPt7pL._SX679_.jpg",
      alt: "Image 4",
      name: "Specsmakers Flex 4",
      price: 3690,
      pPrice: 5000,
      size: "medium",
      gender: "male",
    },
    {
      id: 5,
      src: "https://m.media-amazon.com/images/I/511UWJuNHOL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 5",
      name: "Specsmakers Flex 5",
      price: 4590,
      pPrice: 7000,
      size: "small",
      gender: "unisex",
    },
    {
      id: 6,
      src: "https://m.media-amazon.com/images/I/51ZI9T2huhL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 6",
      name: "Specsmakers Flex 6",
      price: 3890,
      pPrice: 4799,
      size: "large",
      gender: "female",
    },
    {
      id: 7,
      src: "https://m.media-amazon.com/images/I/61YVfpNgvBL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 7",
      name: "Specsmakers Flex 7",
      price: 1500,
      pPrice: 3500,
      size: "medium",
      gender: "male",
    },
    {
      id: 8,
      src: "https://m.media-amazon.com/images/I/41nHP53WGOS._SX679_.jpg",
      alt: "Image 8",
      name: "Specsmakers Flex 8",
      price: 4190,
      pPrice: 8000,
      size: "small",
      gender: "unisex",
    },
  ];

  // Extract unique sizes and genders dynamically
  const uniqueSizes = ["all", ...new Set(sunglasses.map((item) => item.size))];
  const uniqueGenders = [
    "all",
    ...new Set(sunglasses.map((item) => item.gender)),
  ];

  // Filtering logic
  const filteredSunglasses = sunglasses.filter(
    (product) =>
      (selectedSize === "all" || product.size === selectedSize) &&
      (selectedGender === "all" || product.gender === selectedGender) &&
      product.price <= maxPrice
  );

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Sunglasses Collection
      </h2>
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        {/* Gender Filter */}
        <select
          className="border p-2"
          onChange={(e) => setSelectedGender(e.target.value)}
          value={selectedGender}
        >
          {uniqueGenders.map((gender) => (
            <option key={gender} value={gender}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </option>
          ))}
        </select>

        {/* Size Filter */}
        <select
          className="border p-2"
          onChange={(e) => setSelectedSize(e.target.value)}
          value={selectedSize}
        >
          {uniqueSizes.map((size) => (
            <option key={size} value={size}>
              {size.charAt(0).toUpperCase() + size.slice(1)}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <input
          type="range"
          min="1000"
          max="5000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="cursor-pointer"
        />
        <span>Max Price: ₹{maxPrice}</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSunglasses.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={product.src}
              className="w-full h-48 object-contain"
              alt={product.alt}
            />
            <div className="p-2 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 line-through">₹{product.pPrice}</p>
              <p className="text-red-500 font-bold text-lg">₹{product.price}</p>
              <p className="text-gray-600">Size: {product.size}</p>
              <p className="text-gray-600">Gender: {product.gender}</p>
              {cart.some((item) => item.id === product.id) ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  Remove <MdClose size={20} />
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 w-full bg-blue-500 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  Add to Cart <GiShoppingCart size={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sunglasses;

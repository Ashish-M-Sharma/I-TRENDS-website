import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { GiShoppingCart } from "react-icons/gi";

const ScreenGlasses = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [maxPrice, setMaxPrice] = useState(5000);
  const sunglasses = [
    {
      id: 1,
      src: "data:image/jpeg;base64,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",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      size: "medium",
      gender: "male",
    },
    {
      id: 2,
      src: "data:image/jpeg;base64,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",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 2290,
      pPrice: 2999,
      size: "small",
      gender: "female",
    },
    {
      id: 3,
      src: "https://m.media-amazon.com/images/I/51nH5xk6KOL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 4000,
      pPrice: 6500,
      size: "large",
      gender: "unisex",
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
      pPrice: 5500,
      size: "small",
      gender: "female",
    },
    {
      id: 6,
      src: "https://m.media-amazon.com/images/I/51ZI9T2huhL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 6",
      name: "Specsmakers Flex 6",
      price: 4390,
      pPrice: 5999,
      size: "large",
      gender: "unisex",
    },
    {
      id: 7,
      src: "https://m.media-amazon.com/images/I/61YVfpNgvBL._AC_UF480,600_SR480,600_.jpg",
      alt: "Image 7",
      name: "Specsmakers Flex 7",
      price: 2780,
      pPrice: 3500,
      size: "medium",
      gender: "unisex",
    },
    {
      id: 8,
      src: "https://m.media-amazon.com/images/I/41nHP53WGOS._SX679_.jpg",
      alt: "Image 8",
      name: "Specsmakers Flex 8",
      price: 2690,
      pPrice: 3560,
      size: "small",
      gender: "male",
    },
  ];
  // Filtering logic
  const filteredSunglasses = sunglasses.filter(
    (item) =>
      (selectedGender === "all" || item.gender === selectedGender) &&
      (selectedSize === "all" || item.size === selectedSize) &&
      item.price <= maxPrice
  );

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Screen Glasses Collection
      </h2>

      {/* Filters Section */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <select
          className="border p-2"
          onChange={(e) => setSelectedGender(e.target.value)}
          value={selectedGender}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <select
          className="border p-2"
          onChange={(e) => setSelectedSize(e.target.value)}
          value={selectedSize}
        >
          <option value="all">All Sizes</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
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

      {/* Products Grid */}
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
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-md"
                >
                  Remove from Cart
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

export default ScreenGlasses;

import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { GiShoppingCart } from "react-icons/gi";

const PowerGlasses = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [maxPrice, setMaxPrice] = useState(5000);

  const powerGlasses = [
    {
      id: 1,
      src: "data:image/png;base64,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",
      name: "Power Glass 1",
      price: 2590,
      pPrice: 3000,
      gender: "male",
      size: "medium",
    },
    {
      id: 2,
      src: "data:image/jpeg;base64,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",
      name: "Power Glass 2",
      price: 2290,
      pPrice: 2999,
      gender: "female",
      size: "small",
    },
    {
      id: 3,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRf3VM_iRuauQSSnfpQ625Rco0l7C6psDeYQ&s",
      name: "Power Glass 3",
      price: 2000,
      pPrice: 3500,
      gender: "unisex",
      size: "large",
    },
    {
      id: 4,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BXqTa53F5yuQmrOHEmSLNBFcD9ggYWpKuA&s",
      name: "Power Glass 4",
      price: 2690,
      pPrice: 3000,
      gender: "male",
      size: "medium",
    },
    {
      id: 5,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC5FZte--VFxs0b8x-CFz8MxyBFk8ZOYCSoQ&s",
      name: "Power Glass 5",
      price: 2590,
      pPrice: 3000,
      gender: "female",
      size: "small",
    },
    {
      id: 6,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3uadrJHG3EhVuXxSeGgCYSmd3C2ByVMiIRQ&s",
      name: "Power Glass 6",
      price: 2590,
      pPrice: 3000,
      gender: "unisex",
      size: "large",
    },
    {
      id: 7,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTJGZXdaqTVZlqlBUtlda4k8iZscBx6t4eQ&s",
      name: "Power Glass 7",
      price: 2590,
      pPrice: 3000,
      gender: "male",
      size: "medium",
    },
    {
      id: 8,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_F8vxLM8BP6D9BTURxB0m0ASk1Jh-fNrYCw&s",
      name: "Power Glass 8",
      price: 2590,
      pPrice: 3000,
      gender: "female",
      size: "small",
    },
  ];

  const filteredGlasses = powerGlasses.filter(
    (glass) =>
      (selectedGender === "all" || glass.gender === selectedGender) &&
      (selectedSize === "all" || glass.size === selectedSize) &&
      glass.price <= maxPrice
  );

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Power Glasses Collection
      </h2>
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <select
          className="border p-2"
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
        <select
          className="border p-2"
          onChange={(e) => setSelectedSize(e.target.value)}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGlasses.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={product.src}
              className="w-full h-48 object-contain"
              alt={product.name}
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
                  Remove
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

export default PowerGlasses;

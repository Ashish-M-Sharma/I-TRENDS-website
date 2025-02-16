import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { MdClose } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

const ContactLenses = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [maxPrice, setMaxPrice] = useState(5000);

  const contactLenses = [
    {
      id: 1,
      src: "https://www.pngplay.com/wp-content/uploads/6/Galaxy-Eye-Lens-PNG-HD-Quality.png",
      alt: "Image 1",
      name: "Specsmakers Lens 1",
      price: 2590,
      pPrice: 3000,
      gender: "unisex",
      size: "medium",
    },
    {
      id: 2,
      src: "https://www.pngplay.com/wp-content/uploads/6/Red-Eye-Lens-Background-PNG-Image.png",
      alt: "Image 2",
      name: "Specsmakers Lens 2",
      price: 3290,
      pPrice: 4999,
      gender: "female",
      size: "small",
    },
    {
      id: 3,
      src: "https://www.pngplay.com/wp-content/uploads/6/Eye-Lens-Brown-Transparent-Background.png",
      alt: "Image 3",
      name: "Specsmakers Lens 3",
      price: 2870,
      pPrice: 3500,
      gender: "male",
      size: "large",
    },
    {
      id: 4,
      src: "https://www.pngplay.com/wp-content/uploads/6/Eye-Lens-Brown-PNG-HD-Quality.png",
      alt: "Image 4",
      name: "Specsmakers Lens 4",
      price: 4690,
      pPrice: 4000,
      gender: "unisex",
      size: "medium",
    },
    {
      id: 5,
      src: "https://www.pngplay.com/wp-content/uploads/6/Eye-Lens-PNG-Clipart-Background.png",
      alt: "Image 5",
      name: "Specsmakers Lens 5",
      price: 3590,
      pPrice: 5500,
      gender: "female",
      size: "small",
    },
    {
      id: 6,
      src: "https://www.pngplay.com/wp-content/uploads/6/Eye-Lens-Brown-PNG-Clipart-Background.png",
      alt: "Image 6",
      name: "Specsmakers Lens 6",
      price: 2890,
      pPrice: 2999,
      gender: "male",
      size: "large",
    },
    {
      id: 7,
      src: "https://www.pngplay.com/wp-content/uploads/6/Eye-Lens-Green-Lens-PNG-Clipart-Background.png",
      alt: "Image 7",
      name: "Specsmakers Lens 7",
      price: 4000,
      pPrice: 7500,
      gender: "unisex",
      size: "medium",
    },
    {
      id: 8,
      src: "https://www.pngplay.com/wp-content/uploads/6/Eye-Lens-PNG-HD-Quality.png",
      alt: "Image 8",
      name: "Specsmakers Lens 8",
      price: 1290,
      pPrice: 3000,
      gender: "female",
      size: "small",
    },
  ];

  const filteredLenses = contactLenses.filter(
    (lens) =>
      (selectedGender === "all" || lens.gender === selectedGender) &&
      (selectedSize === "all" || lens.size === selectedSize) &&
      lens.price <= maxPrice
  );

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Contact Lenses Collection
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
        {filteredLenses.map((product) => (
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

export default ContactLenses;

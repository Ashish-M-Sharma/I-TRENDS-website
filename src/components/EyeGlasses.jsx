import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { MdClose } from "react-icons/md";

const EyeGlasses = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const eyeGlasses = [
    {
      id: 1,
      src: "https://www.specsmakers.in/cdn/shop/files/1_4d71751c-5d0e-4078-b5b3-fcf05edf2c99.jpg?v=1738158285&width=480",
      alt: "Image 1",
      name: " Specsmakers Flex 1",
      price: "2,590",
      pPrice: "3,000",
    },
    {
      id: 2,
      src: "https://www.specsmakers.in/cdn/shop/files/1_674ae7ca-5c61-466b-a4a8-956bfd4c5ae8.jpg?v=1738158350&width=1024",
      alt: "Image 2",
      name: " Specsmakers Flex 2",
      price: "2,290",
      pPrice: "2,999",
    },
    {
      id: 3,
      src: "https://www.specsmakers.in/cdn/shop/files/5_7eb115fb-b3d3-414c-81db-94eaad77380e.jpg?v=1738158351&width=1024",
      alt: "Image 3",
      name: " Specsmakers Flex 3",
      price: "2,000",
      pPrice: "3,500",
    },
    {
      id: 4,
      src: "https://www.specsmakers.in/cdn/shop/files/5_aebeb5fd-85f6-430a-8925-967a08ee826b.jpg?v=1738158345&width=1024",
      alt: "Image 4",
      name: " Specsmakers Flex 4",
      price: "2,690",
      pPrice: "3,000",
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        Eye Glasses Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {eyeGlasses.map((glass) => (
          <div
            key={glass.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={glass.src}
              alt={glass.alt}
              className="w-full h-48 object-cover"
            />
            <div className="p-2 text-center">
              <h3 className="text-lg font-semibold">{glass.name}</h3>
              <p className="text-gray-500 line-through">₹{glass.pPrice}</p>
              <p className="text-red-500 font-bold text-lg">₹{glass.price}</p>

              {cart.some((item) => item.id === glass.id) ? (
                <button
                  onClick={() => removeFromCart(glass.id)}
                  className="mt-3 w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  Remove <MdClose size={20} />
                </button>
              ) : (
                <button
                  onClick={() => addToCart(glass)}
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

export default EyeGlasses;

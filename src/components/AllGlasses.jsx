import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { MdClose } from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";

const AllGlasses = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const [filters, setFilters] = useState({ price: "", gender: "", size: "" });

  const eyeGlasses = [
    {
      id: 1,
      src: "https://www.specsmakers.in/cdn/shop/files/1_4d71751c-5d0e-4078-b5b3-fcf05edf2c99.jpg?v=1738158285&width=480",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 2,
      src: "https://www.specsmakers.in/cdn/shop/files/1_674ae7ca-5c61-466b-a4a8-956bfd4c5ae8.jpg?v=1738158350&width=1024",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 2290,
      pPrice: 2999,
      gender: "Men",
      size: "Large",
    },
    {
      id: 3,
      src: "https://www.specsmakers.in/cdn/shop/files/5_7eb115fb-b3d3-414c-81db-94eaad77380e.jpg?v=1738158351&width=1024",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 2000,
      pPrice: 3500,
      gender: "Women",
      size: "Small",
    },
    {
      id: 4,
      src: "https://www.specsmakers.in/cdn/shop/files/5_aebeb5fd-85f6-430a-8925-967a08ee826b.jpg?v=1738158345&width=1024",
      alt: "Image 4",
      name: "Specsmakers Flex 4",
      price: 2690,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 5,
      src: "https://www.specsmakers.in/cdn/shop/files/1_4d71751c-5d0e-4078-b5b3-fcf05edf2c99.jpg?v=1738158285&width=480",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 6,
      src: "https://www.specsmakers.in/cdn/shop/files/6_b142a3ba-1744-4eeb-8060-93c890bae38a.jpg?v=1738158266&width=1024",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 2290,
      pPrice: 2999,
      gender: "Men",
      size: "Large",
    },
    {
      id: 7,
      src: "https://www.specsmakers.in/cdn/shop/files/5_2c71b177-a025-4dc1-87fa-5dd447440b9a.jpg?v=1738921725&width=1024",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 2000,
      pPrice: 3500,
      gender: "Women",
      size: "Small",
    },
    {
      id: 8,
      src: "https://www.specsmakers.in/cdn/shop/files/5_aebeb5fd-85f6-430a-8925-967a08ee826b.jpg?v=1738158345&width=1024",
      alt: "Image 4",
      name: "Specsmakers Flex 4",
      price: 2690,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 9,
      src: "https://www.specsmakers.in/cdn/shop/files/1_4d71751c-5d0e-4078-b5b3-fcf05edf2c99.jpg?v=1738158285&width=480",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 10,
      src: "https://www.specsmakers.in/cdn/shop/files/5_2d49bf6a-ca78-402a-84e3-07adb75b2bc8.jpg?v=1738158256&width=1024",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 2290,
      pPrice: 2999,
      gender: "Men",
      size: "Large",
    },
    {
      id: 11,
      src: "https://www.specsmakers.in/cdn/shop/files/6_d54c4f4a-6027-4656-809d-a9ea2ea7da6a.jpg?v=1738921726&width=1024",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 2000,
      pPrice: 3500,
      gender: "Women",
      size: "Small",
    },
    {
      id: 12,
      src: "https://www.specsmakers.in/cdn/shop/files/5_aebeb5fd-85f6-430a-8925-967a08ee826b.jpg?v=1738158345&width=1024",
      alt: "Image 4",
      name: "Specsmakers Flex 4",
      price: 2690,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 13,
      src: "https://www.specsmakers.in/cdn/shop/files/1_4d71751c-5d0e-4078-b5b3-fcf05edf2c99.jpg?v=1738158285&width=480",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 14,
      src: "https://www.specsmakers.in/cdn/shop/files/4_c76acb9f-6cd7-46fc-b1f1-15c6d5f102d5.jpg?v=1738921727&width=1024",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 2290,
      pPrice: 2999,
      gender: "Men",
      size: "Large",
    },
    {
      id: 15,
      src: "https://www.specsmakers.in/cdn/shop/files/5_7eb115fb-b3d3-414c-81db-94eaad77380e.jpg?v=1738158351&width=1024",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 2000,
      pPrice: 3500,
      gender: "Women",
      size: "Small",
    },
    {
      id: 16,
      src: "https://www.specsmakers.in/cdn/shop/files/3_f6f21db3-bbfb-423e-8fa5-ccf88a75238b.jpg?v=1738158227&width=1024",
      alt: "Image 4",
      name: "Specsmakers Flex 4",
      price: 2690,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 17,
      src: "https://www.specsmakers.in/cdn/shop/files/5_f6f1c233-a605-40b3-ba69-7c04e0dd4c61.jpg?v=1738158229&width=1024",
      alt: "Image 1",
      name: "Specsmakers Flex 1",
      price: 2590,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
    {
      id: 18,
      src: "https://www.specsmakers.in/cdn/shop/files/1_674ae7ca-5c61-466b-a4a8-956bfd4c5ae8.jpg?v=1738158350&width=1024",
      alt: "Image 2",
      name: "Specsmakers Flex 2",
      price: 2290,
      pPrice: 2999,
      gender: "Men",
      size: "Large",
    },
    {
      id: 19,
      src: "https://www.specsmakers.in/cdn/shop/files/5_7eb115fb-b3d3-414c-81db-94eaad77380e.jpg?v=1738158351&width=1024",
      alt: "Image 3",
      name: "Specsmakers Flex 3",
      price: 2000,
      pPrice: 3500,
      gender: "Women",
      size: "Small",
    },
    {
      id: 20,
      src: "https://www.specsmakers.in/cdn/shop/files/5_aebeb5fd-85f6-430a-8925-967a08ee826b.jpg?v=1738158345&width=1024",
      alt: "Image 4",
      name: "Specsmakers Flex 4",
      price: 2690,
      pPrice: 3000,
      gender: "Unisex",
      size: "Medium",
    },
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredGlasses = eyeGlasses.filter((glass) => {
    return (
      (filters.price === "" || glass.price <= parseInt(filters.price)) &&
      (filters.gender === "" || glass.gender === filters.gender) &&
      (filters.size === "" || glass.size === filters.size)
    );
  });

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
        All Glasses Collection
      </h2>

      {/* Filter */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <select
          name="price"
          onChange={handleFilterChange}
          className="p-2 border rounded-md"
        >
          <option value="">Filter by Price</option>
          <option value="2000">Below ₹2000</option>
          <option value="2500">Below ₹2500</option>
          <option value="3000">Below ₹3000</option>
        </select>

        <select
          name="gender"
          onChange={handleFilterChange}
          className="p-2 border rounded-md"
        >
          <option value="">Filter by Gender</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select
          name="size"
          onChange={handleFilterChange}
          className="p-2 border rounded-md"
        >
          <option value="">Filter by Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      {/* Glasses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredGlasses.map((glass) => (
          <div
            key={glass.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <div className="relative">
              <img
                src={glass.src}
                className="w-full h-full object-cover"
                alt="image"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {glass.name}
              </h3>
              <p className="text-gray-500">Gender: {glass.gender}</p>
              <p className="text-gray-500">Size: {glass.size}</p>
              <p className="text-gray-400 line-through">₹{glass.pPrice}</p>
              <p className="text-red-500 font-bold text-xl">₹{glass.price}</p>

              {cart.some((item) => item.id === glass.id) ? (
                <button
                  onClick={() => removeFromCart(glass.id)}
                  className="mt-3 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  Remove <MdClose size={20} />
                </button>
              ) : (
                <button
                  onClick={() => addToCart(glass)}
                  className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
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

export default AllGlasses;

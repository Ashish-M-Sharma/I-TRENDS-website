import React from "react";
import { NavLink } from "react-router-dom";

const ShopByGender = () => {
  const gender = [
    {
      id: 1,
      src: "https://www.specsmakers.in/cdn/shop/files/Artboard_1_copy.jpg?v=1738304587&width=740",
      title: "EYEGLASSES MEN",
      alt: "Eyeglasses for Men",
    },
    {
      id: 2,
      src: "https://www.specsmakers.in/cdn/shop/files/Artboard_2_copy.jpg?v=1738304587&width=740",
      title: "EYEGLASSES WOMEN",
      alt: "Eyeglasses for Women",
    },
    {
      id: 3,
      src: "https://www.specsmakers.in/cdn/shop/files/Artboard_3_copy.jpg?v=1738304587&width=740",
      title: "EYEGLASSES KIDS",
      alt: "Eyeglasses for Kids",
    },
  ];

  return (
    <>
      {/* Section Header */}
      <div className="w-full flex items-center gap-5 mt-13 my-10 px-4 md:px-8">
        <div className="border flex-1 h-[1.5px] border-zinc-400"></div>
        <p className="text-xl md:text-2xl lg:text-[30px] font-bold leading-[42px] text-center">
          SHOP BY GENDER
        </p>
        <div className="border flex-1 h-[1.5px] border-zinc-400"></div>
      </div>

      {/* Cards Section */}
      <div className="w-[90%] mx-auto flex flex-wrap justify-center gap-4">
        {gender.map((val) => (
          <div
            key={val.id}
            className="w-full sm:w-[48%] md:w-[30%] rounded-xl shadow-lg"
          >
            <NavLink to="/AllGlasses">
              {" "}
              <img
                src={val.src}
                alt={val.alt}
                className="cursor-pointer w-full rounded-t-xl"
              />
              <p className="text-[16px] md:text-[18px] font-medium leading-[18.2px] text-center py-4 cursor-pointer text-[#5F0C16]">
                {val.title}
              </p>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShopByGender;

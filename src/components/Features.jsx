import React, { useState } from "react";

const Features = () => {
  const [openBox, setOpenBox] = useState(null);

  const toggleBox = (boxId) => {
    setOpenBox(openBox === boxId ? null : boxId);
  };

  return (
    <div
      className="relative w-[90%] h-[600px] bg-red-500 m-auto bg-cover bg-center my-[50px]"
      style={{
        backgroundImage:
          "url('https://www.specsmakers.in/cdn/shop/files/Hotspot_website.webp?v=1717569126&width=1920')",
      }}
    >
      {/* First Button */}
      <div
        className="absolute left-[50%] md:left-[55%] top-[20%] md:top-[25%] flex justify-center items-center"
        onClick={() => toggleBox(1)}
      >
        <div className="absolute w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full bg-black opacity-50 animate-ping"></div>
        <p className="relative w-[45px] md:w-[52px] h-[45px] md:h-[52px] bg-black text-white rounded-full flex justify-center items-center text-[24px] md:text-[28px] cursor-pointer">
          +
        </p>
      </div>
      {openBox === 1 && (
        <div className="absolute left-[50%] md:left-[60%] top-[25%] md:top-[30%] bg-white text-black p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-[300px] transform -translate-x-1/2">
          <p className="text-[#5F0C16] font-[600] leading-[24px] text-[14px] md:text-[16px] font-medium">
            <strong>High-Quality Lenses:</strong> Crystal-clear vision with
            durable lenses.
          </p>
        </div>
      )}

      {/* Second Button */}
      <div
        className="absolute left-[20%] md:left-[30%] top-[45%] md:top-[50%] flex justify-center items-center"
        onClick={() => toggleBox(2)}
      >
        <div className="absolute w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full bg-black opacity-50 animate-ping"></div>
        <p className="relative w-[45px] md:w-[52px] h-[45px] md:h-[52px] bg-black text-white rounded-full flex justify-center items-center text-[24px] md:text-[28px] cursor-pointer">
          +
        </p>
      </div>
      {openBox === 2 && (
        <div className="absolute left-[20%] md:left-[32%] top-[55%] md:top-[60%] bg-white text-black p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-[300px] transform -translate-x-1/2">
          <p className="text-[#5F0C16] font-[600] leading-[24px] text-[14px] md:text-[16px] font-medium">
            <strong>UV Protection:</strong> Blocks harmful UV rays for eye
            safety.
          </p>
        </div>
      )}

      {/* Third Button */}
      <div
        className="absolute left-[50%] md:left-[40%] top-[70%] md:top-[80%] flex justify-center items-center"
        onClick={() => toggleBox(3)}
      >
        <div className="absolute w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full bg-black opacity-50 animate-ping"></div>
        <p className="relative w-[45px] md:w-[52px] h-[45px] md:h-[52px] bg-black text-white rounded-full flex justify-center items-center text-[24px] md:text-[28px] cursor-pointer">
          +
        </p>
      </div>
      {openBox === 3 && (
        <div className="absolute left-[50%] md:left-[42%] top-[75%] md:top-[85%] bg-white text-black p-3 md:p-4 rounded-lg shadow-lg max-w-[200px] md:max-w-[300px] transform -translate-x-1/2">
          <p className="text-[#5F0C16] font-[600] leading-[24px] text-[14px] md:text-[16px] font-medium">
            <strong>Lightweight Comfort:</strong> Feather-light frames for
            all-day wear.
          </p>
        </div>
      )}
    </div>
  );
};

export default Features;

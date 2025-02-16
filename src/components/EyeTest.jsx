import React from "react";

const EyeTest = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-5 mt-13 my-10 text-center">
        <div className="border w-full md:w-[200px] lg:w-[550px] h-[1.5px] border-zinc-400"></div>
        <p className="text-[20px] md:text-[24px] lg:text-[30px] font-[700] leading-[30px] md:leading-[36px] lg:leading-[42px]">
          FREE ONLINE EYE TEST
        </p>
        <div className="border w-full md:w-[200px] lg:w-[550px] h-[1.5px] border-zinc-400"></div>
      </div>

      <div className=" w-full h-auto">
        <img
          src="https://static5.lenskart.com/media/uploads/hechome11.png"
          alt="Eye test"
          className="w-full cursor-pointer"
        />
      </div>
    </>
  );
};

export default EyeTest;

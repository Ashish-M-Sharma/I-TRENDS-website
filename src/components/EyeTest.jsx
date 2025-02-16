import React from "react";

const EyeTest = () => {
  return (
    <>
      <div className=" w-full flex justify-center items-center gap-5 mt-13 my-10 ">
        <div className="border w-[550px] h-[1.5px] border-zinc-400"></div>
        <p className="text-[30px] font-[700] leading-[42px]">
          FREE ONLINE EYE TEST
        </p>
        <div className="border w-[550px] h-[1.5px] border-zinc-400"></div>
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

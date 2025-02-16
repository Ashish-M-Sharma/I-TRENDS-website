import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./GlassesTypes.css";

const GlassesTypes = () => {
  const types = [
    {
      id: 1,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/image179.png",
      alt: "Round",
      name: "Round",
    },
    {
      id: 2,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/cateeye.jpg",
      alt: "Cat-Eye",
      name: "Cat-Eye",
    },
    {
      id: 3,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/clubmaster.jpg",
      alt: "Clubmaster",
      name: "Clubmaster",
    },
    {
      id: 4,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/trans.jpg",
      alt: "Transparent",
      name: "Transparent",
    },
    {
      id: 5,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/blend.jpg",
      alt: "Blend-Edit",
      name: "Blend-Edit",
    },
    {
      id: 6,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/clipon.jpg",
      alt: "Air Clip On",
      name: "Air Clip On",
    },
    {
      id: 7,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/airflex.jpg",
      alt: "Air Flex",
      name: "Air Flex",
    },
    {
      id: 8,
      src: "https://static1.lenskart.com/media/desktop/img/Sep21/aviator.jpg",
      alt: "Retro Aviator",
      name: "Retro Aviator",
    },
  ];

  return (
    <div className="w-full overflow-hidden px-4 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-7 my-12">
      {/* Left Text Section */}
      <div className="w-full lg:w-auto text-center lg:text-left">
        <p className="text-4xl md:text-5xl font-light leading-tight font-sans">
          WEAR THE
        </p>
        <p className="text-4xl md:text-5xl font-bold leading-tight font-sans">
          TREND
        </p>
        <p className="text-md md:text-lg font-normal mt-2">
          Our Hottest Collection
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="w-full relative max-w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          navigation
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {types.map((val) => (
            <SwiperSlide key={val.id}>
              <div className="w-[90%] sm:w-[250px] h-auto cursor-pointer flex flex-col items-center gap-3 p-3 my-2 rounded-lg">
                <img
                  src={val.src}
                  alt={val.alt}
                  className="w-40 md:w-56 h-auto"
                />
                <p className="text-md md:text-lg font-semibold">{val.name}</p>
                <button className="bg-[#5697c3] text-white text-sm md:text-lg font-semibold px-4 md:px-6 py-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-[#56C3BF]">
                  Explore
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GlassesTypes;

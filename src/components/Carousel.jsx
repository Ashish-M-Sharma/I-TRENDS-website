import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";

const Carousel = () => {
  const swiper1 = [
    {
      id: 1,
      src: "https://static5.lenskart.com/media/uploads/hustlr-desktop.gif",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://static5.lenskart.com/media/uploads/web-phonic-14jan.jpg",
      alt: "Slide 2",
    },
  ];

  const swiper2 = [
    {
      id: 1,
      src: "https://www.specsmakers.in/cdn/shop/files/Reading_glass_b022cace-576c-4e10-b396-03b784293e54.webp?v=1738304327&width=1920",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "https://www.specsmakers.in/cdn/shop/files/Eyeglasses_1.webp?v=1738304174&width=1920",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "https://www.specsmakers.in/cdn/shop/files/Sunglasses.webp?v=1738304327&width=1920",
      alt: "Slide 3",
    },
    {
      id: 4,
      src: "https://www.specsmakers.in/cdn/shop/files/Contact_Lenses.webp?v=1738304328&width=1920",
      alt: "Slide 4",
    },
    {
      id: 5,
      src: "https://www.specsmakers.in/cdn/shop/files/Computer_Glasses.webp?v=1738304327&width=1920",
      alt: "Slide 5",
    },
    {
      id: 6,
      src: "https://www.specsmakers.in/cdn/shop/files/Clipon_banner_1.webp?v=1738304173&width=1920",
      alt: "Slide 6",
    },
    {
      id: 7,
      src: "https://www.specsmakers.in/cdn/shop/files/Artboard_1_1.webp?v=1738305124&width=1920",
      alt: "Slide 7",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        speed={1000}
        //   pagination={{ clickable: false }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full my-1 mt-8"
      >
        {swiper1.map((val) => {
          return (
            <SwiperSlide>
              <NavLink to="/AllGlasses">
                {" "}
                <img
                  key={val.id}
                  src={val.src}
                  alt={val.alt}
                  className=" w-full h-auto"
                />
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className=" w-full my-8">
        <NavLink to="/AllGlasses">
          <img
            src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
            alt="Image"
          />
        </NavLink>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        speed={1000}
        //   pagination={{ clickable: false }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full my-1 mb-10"
      >
        {swiper2.map((val) => {
          return (
            <SwiperSlide>
              <NavLink to="/AllGlasses">
                <img src={val.src} alt={val.alt} className=" w-full h-auto" />
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;

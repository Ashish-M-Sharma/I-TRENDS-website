import React, { useRef, useContext } from "react";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdClose,
} from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CartContext } from "../context/CartContext";

const NewArrival = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const swiperRef = useRef(null);

  const glasses = [
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
    {
      id: 5,
      src: "https://www.specsmakers.in/cdn/shop/files/1_a83c73cd-641f-4dd2-bfba-e6731bafb7fb.jpg?v=1738158346&width=1024",
      alt: "Image 5",
      name: " Specsmakers Flex 5",
      price: "2,800",
      pPrice: "3,200",
    },
    {
      id: 6,
      src: "https://www.specsmakers.in/cdn/shop/files/5_ed49832e-18e0-4b61-8d34-686469c99c0b.jpg?v=1738158347&width=1024",
      alt: "Image 6",
      name: " Specsmakers Flex 6",
      price: "3,400",
      pPrice: "4,200",
    },
    {
      id: 7,
      src: "https://www.specsmakers.in/cdn/shop/files/5_29731f74-08ed-4e0d-8b33-807bd00b4a00.jpg?v=1738158330&width=1024",
      alt: "Image 7",
      name: " Specsmakers Flex 7",
      price: "3,000",
      pPrice: "4,000",
    },
    {
      id: 8,
      src: "https://www.specsmakers.in/cdn/shop/files/5_d6d81919-958a-4cab-a5fb-a5cbf05b244a.jpg?v=1738158323&width=1024",
      alt: "Image 8",
      name: " Specsmakers Flex 8",
      price: "4,300",
      pPrice: "4,999",
    },
  ];

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleCartClick = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      console.log("Removing from cart:", item);
      removeFromCart(item.id);
    } else {
      console.log("Adding to cart:", item);
      addToCart(item);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center gap-5 my-10">
        <MdKeyboardArrowLeft
          className="text-[32px] text-[#B14359] cursor-pointer"
          onClick={goPrev}
        />
        <p className="text-[28px] font-[600] text-[#B14359]">New Arrivals</p>
        <MdKeyboardArrowRight
          className="text-[32px] text-[#B14359] cursor-pointer"
          onClick={goNext}
        />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-[90%] mx-auto my-5"
        ref={swiperRef}
      >
        {glasses.map((item) => {
          const inCart = cart.some((cartItem) => cartItem.id === item.id);
          return (
            <SwiperSlide key={item.id}>
              <div className="w-full rounded-xl shadow-md">
                <div className="flex flex-col items-start gap-1 px-2 py-2">
                  <span className="text-[14px] bg-[#F6DFD9] text-[#5F0C16] px-2 py-1">
                    New Arrival
                  </span>
                  <p className="text-red-700 px-2">60% Off</p>
                </div>
                <img src={item.src} alt={item.alt} className="w-full py-5" />
                <div className="flex flex-col items-center gap-3 py-6">
                  <p className="text-[16px] text-[#5F0C16]">{item.name}</p>
                  <span className="flex gap-2">
                    <p className="text-[16px] text-[#5F0C16]">
                      &#8377; {item.price}
                    </p>
                    <p className="text-[14px] text-[#5f0c1660]">
                      &#8377; <del>{item.pPrice}</del>
                    </p>
                    <p className="text-[14px] text-red-700">Sale</p>
                  </span>
                </div>
                <div className="flex justify-center pb-4">
                  <button
                    className={`flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition-all transform shadow-lg ${
                      inCart
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    onClick={() => handleCartClick(item)}
                  >
                    {inCart ? (
                      <>
                        Remove <MdClose size={20} />
                      </>
                    ) : (
                      <>
                        Add To Cart <GiShoppingCart size={20} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default NewArrival;

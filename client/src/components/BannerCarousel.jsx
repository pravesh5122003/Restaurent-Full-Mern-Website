import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useNavigate } from "react-router-dom";

import banner1Desktop from "../assets/main_banner_bg.png";
import banner1Mobile from "../assets/main_banner_bg_sm.png";
import banner2Desktop from "../assets/main_banner2_bg.png";
import banner2Mobile from "../assets/main_banner2_bg_sm.png";
import banner3Desktop from "../assets/main_banner3_bg.png";
import banner3Mobile from "../assets/main_banner3_bg_sm.png";
import banner4Desktop from "../assets/main_banner4_bg.png";
import banner4Mobile from "../assets/main_banner4_bg_sm.png";

const banners = [
  { desktop: banner1Desktop, mobile: banner1Mobile },
  { desktop: banner2Desktop, mobile: banner2Mobile },
  { desktop: banner3Desktop, mobile: banner3Mobile },
  { desktop: banner4Desktop, mobile: banner4Mobile },
];

const BannerCarousel = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Banner Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded overflow-hidden"
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <picture>
              <source srcSet={banner.mobile} media="(max-width: 768px)" />
              <img
                src={banner.desktop}
                alt={`Banner ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Buttons Below */}
      <div className="flex gap-4 mt-4 animate-fade-slide-in">
  <button
    onClick={() => navigate("/Deals")}
    className="flex items-center gap-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out glow-button"
  >
    Discounted offer
  </button>

  <button
    onClick={() => navigate("/offers")}
    className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold px-6 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out glow-button"
  >
    🎉FREE Offer 
  </button>
</div>


    </div>
  );
};

export default BannerCarousel;

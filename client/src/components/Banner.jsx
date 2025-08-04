import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative pt-10">
      <img
        src={assets.main_banner_bg}
        alt=""
        className="hidden md:block w-full"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt=""
        className=" md:hidden w-full"
      />
      <div className="absolute inset-0 flex items-end justify-center pb-10 px-4">
  {/* 
    absolute inset-0: banner overlay
    items-end: align items to bottom
    justify-center: center horizontally
    pb-10: distance from bottom (adjustable)
    px-4: small side padding for mobile
  */}

<div className="flex flex-wrap gap-14 justify-center">
  {/* Classic red buttons with nice spacing */}
  
  <Link
  to="/deals"
  className="flex group items-center gap-1.5 px-4 py-2.5 rounded text-white bg-red-700 text-xs md:text-sm"
>
Hunger Zone
  <img
    src={assets.white_arrow_icon}
    alt="arrow"
    className="w-3 h-3 transition group-hover:translate-x-1"
  />
</Link>


  <Link
  to="/offers"
  className="flex group items-center gap-1.5 px-4 py-2.5 rounded text-white bg-red-700 text-xs md:text-sm"
>
  Offer for U
  <img
    src={assets.white_arrow_icon}
    alt="arrow"
    className="w-3 h-3 transition group-hover:translate-x-1"
  />
</Link>

</div>

</div>

    </div>
  );
};
export default Banner;

import { useState } from "react";
const Footer = () => {
  const [hoveredStar, setHoveredStar] = useState(0);
  return (
    <div className="text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-wrap justify-between gap-12 md:gap-6">
        <div className="max-w-80">
          <h1 className="text-3xl font-semibold text-[#212121]">Custom restro</h1>
          <p className="text-sm">
          Custom Restro blends tradition and taste, serving freshly prepared pizzas, gourmet burgers, and satisfying meals that bring comfort and joy to every table.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {/* Instagram */}
            <a
  href="https://www.instagram.com/custom_pizza12?igsh=MXBmemN5cHo0bnEwMw=="  // Replace with your Instagram URL
  target="_blank"
  rel="noopener noreferrer"
>
  <svg className="w-6 h-6 text-pink-500 hover:text-pink-600" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
  </svg>
</a>

        {/* Call */}
        <a href="tel:+918953573714" aria-label="Call us now">
  <svg className="w-6 h-6 text-green-600 hover:text-green-800" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.06 19.5 19.5 0 01-6-6A19.79 19.79 0 013.08 4.18 2 2 0 015 2h3a2 2 0 012 1.72 12.44 12.44 0 00.7 2.73 2 2 0 01-.45 2.11L9.03 9.03a16 16 0 006 6l1.47-1.47a2 2 0 012.11-.45 12.44 12.44 0 002.73.7A2 2 0 0122 16.92z"/>
  </svg>
</a>


          {/* WhatsApp */}
          <a
  href="https://wa.me/918953573714"  // Replace with your number
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
>
  <svg
    className="w-6 h-6 text-green-500 hover:text-green-700"
    fill="currentColor"
    viewBox="0 0 27 24"
  >
    <path d="M20.52 3.48A11.77 11.77 0 0012.06 0 11.9 11.9 0 000 12.07a11.77 11.77 0 001.64 5.96L0 24l6.17-1.62a11.86 11.86 0 005.88 1.51h.05a11.9 11.9 0 008.42-20.41zM12.06 21.5a9.74 9.74 0 01-5-1.38l-.35-.21-3.66.96.98-3.57-.23-.37A9.69 9.69 0 1121.75 12a9.69 9.69 0 01-9.69 9.5zm5.38-7.27c-.29-.15-1.72-.85-1.98-.95s-.46-.15-.66.15-.76.94-.94 1.14-.35.21-.65.07a7.91 7.91 0 01-2.34-1.44 8.89 8.89 0 01-1.64-2.06c-.17-.3 0-.46.13-.61s.29-.35.44-.52a2.09 2.09 0 00.29-.49.55.55 0 000-.52c-.07-.15-.66-1.58-.9-2.17s-.47-.51-.66-.52-.37 0-.57 0a1.1 1.1 0 00-.79.37 3.29 3.29 0 00-1 2.43 5.74 5.74 0 001.2 2.88c.14.2 1.9 3 4.61 4.2a15.41 15.41 0 001.54.57 3.71 3.71 0 001.7.11c.52-.08 1.72-.7 1.96-1.38s.24-1.26.17-1.38-.27-.2-.56-.35z" />
  </svg>
</a>

{/* Location */}
<a
  href="https://www.google.co.in/maps/place/Custom+Pizza+%26+Restaurant+%7C+Best+restaurant+in+Pukhrayan+%7C+Best+pizza+restaurant/@26.2142273,79.5640481,12.94z/data=!4m6!3m5!1s0x399da5a3e00d05ab:0x948cd0bf9ce51769!8m2!3d26.2191985!4d79.8339068!16s%2Fg%2F11wfs79054?entry=ttu&g_ep=EgoyMDI1MDczMC4wIKXMDSoASAFQAw%3D%3D"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    className="w-6 h-6 text-red-500 hover:text-red-600"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
</a>
          </div>
        </div>
        <div className="flex justify-center items-center">
            {/* View Menu Button */}
            <a
  href="/menu1.jpg"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#D4AF37] text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#bfa02e] transition-colors duration-200"
>
  🍽️ View Whole Menu
</a>

        <li className="bg-white shadow-md rounded-lg px-4 py-2 text-sm text-gray-700 font-medium flex items-center gap-2 hover:bg-[#FFF7E6] transition-colors duration-200">
  <svg
    className="w-5 h-5 text-[#D4AF37]"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V6a.75.75 0 00-1.5 0v4a.75.75 0 00.44.68l3 1.25a.75.75 0 10.56-1.39L10.75 9.25z"
      clipRule="evenodd"
    />
  </svg>
  Open Daily: <span className="text-black font-semibold">10:00 AM – 11:00 PM</span>
</li>
</div>

        <div>
  <p className="text-lg text-gray-800">MY RESTAURANT</p>
  <ul className="mt-3 flex flex-col gap-2 text-sm">
    <li>
      <a href="/about">About Us</a>
    </li>
    <li>
  <a href="/menu1.jpg" target="_blank" rel="noopener noreferrer">
    View Our Menu
  </a>
</li>

    <li>
      <a href="/contact">Contact</a>
    </li>
    <li>
  <a
    href="https://g.page/r/CWkX5Zy_0IyUEBM/review"
    target="_blank"
    rel="noopener noreferrer"
  >
    Customer Reviews
  </a>
</li>

    <li>
      <a href="/franchise">Franchise Opportunities</a>
    </li>
  </ul>
</div>


        <div>
          <p className="text-lg text-gray-800">SUPPORT</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Safety Information</a>
            </li>
            <li>
              <a href="#">Cancellation Options</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="max-w-80">
        <div className="flex justify-center">
  <p className="text-lg text-gray-800">PLEASE REVIEW US..</p>
</div>
          <p className="mt-3 text-sm text-center max-w-xl mx-auto">
          Enjoyed your meal? Share the love with a Google review and help more food lovers find us — your support means everything!
          </p>
          {/* ⭐ Hovering Stars */}
          <div className="flex justify-center items-center mt-4 space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
      <svg
      key={star}
      onMouseEnter={() => setHoveredStar(star)}
      onMouseLeave={() => setHoveredStar(0)}
      onClick={() =>
        window.open("https://g.page/r/CWkX5Zy_0IyUEBM/review", "_blank")
      }
      className={`w-10 h-10 cursor-pointer transition-all duration-200 ${
        star <= hoveredStar ? "text-[#D4AF37] scale-110" : "text-[#FFD580]"
      }`}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.84 1.416 8.248L12 18.896 4.584 23.836 6 15.588 0 9.748l8.332-1.593z" />
    </svg>
    
            ))}
          </div>


        </div>
      </div>
      <hr className="border-gray-300 mt-8" />
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© {new Date().getFullYear()} Custom Pizza! All rights reserved.</p>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;

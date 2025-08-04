import { Link } from "react-router-dom"; // ✅ Import Link from React Router

const Deals = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔥 Discounted Meals for You</h2>
      
      <ul className="space-y-4 mb-8">
        <li className="bg-green-100 p-4 rounded">
          <strong>Single Meal - ₹120</strong> ➡ Now Just at 
          <span className="text-red-600 font-extrabold text-lg"> ₹99/-</span> <br />
          (🍔 1 Burger + 🍟 Small Fries + 🥤 Cold Drink)
        </li>

        <li className="bg-green-100 p-4 rounded">
          <strong>Double Meal - ₹220</strong> ➡ Now Just at 
          <span className="text-red-600 font-extrabold text-lg"> ₹179/-</span> <br />
          (🍔 2 Burgers + 🍟 Large Fries + 🥤 2 Cold Drinks)
        </li>

        <li className="bg-green-100 p-4 rounded">
          <strong>Family Meal - ₹450</strong> ➡ Now Just at 
          <span className="text-red-600 font-extrabold text-lg"> ₹349/-</span> <br />
          (🍕 2 Pizza + 🍔 2 Burgers + 🍟 Large Fries + 🥤 4 Cold Drinks)
        </li>
      </ul>

      {/* ✅ Replaced <a> with <Link> */}
      <div className="flex justify-center">
        <Link
          to="/products/dairy" // 👈 Change this to the actual path for your Dairy section
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl text-lg md:text-xl shadow-lg transition-transform transform hover:scale-105 inline-block text-center"
        >
          🚀 Order Now
        </Link>
      </div>
    </div>
  );
};

export default Deals;

import { Link } from "react-router-dom"; // 👈 Make sure this is at the top

const Offers = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Special Offers for You 🎉</h2>

      <ul className="space-y-4">
        <li className="bg-yellow-100 p-4 rounded">
          🍕 Buy <strong>Medium Pizza</strong> & get a 🥤 <strong>Free Cold Drink</strong>
        </li>
        <li className="bg-yellow-100 p-4 rounded">
          🍕 Buy <strong>Large Pizza</strong> & get 🥟 <strong>Momo</strong> or 🍟 <strong>Fries</strong> + 🥤 <strong>Cold Drink</strong>
        </li>
        <li className="bg-yellow-100 p-4 rounded">
          🛒 Spend ₹500+ & get a 🍱 <strong>Single Meal Free</strong>
        </li>
      </ul>

      {/* Replaced <a> with <Link> to go to homepage */}
      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-2xl text-lg md:text-xl shadow-lg transition-transform transform hover:scale-105 inline-block text-center"
        >
          🚀 Order Now
        </Link>
      </div>
    </div>
  );
};

export default Offers;

  
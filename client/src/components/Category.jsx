import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Category = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>

      <div className="my-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 rounded-lg flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
          >
            {/* Icon with circular background */}
            <div className="p-8 bg-[#fff4e0] rounded-full shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">

            <img
  src={category.image}
  alt=""
  className="w-20 h-20 transition-transform duration-300 group-hover:scale-110"
/>

            </div>

            {/* Category text */}
            <p className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-primary transition">
  {category.text}
</p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

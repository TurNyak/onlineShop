import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { totalQuantity } = useCart();

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold text-xl">🛍 TaskShop</h1>
      <button className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700">
        Cart ({totalQuantity})
      </button>
    </nav>
  );
};

export default Navbar;

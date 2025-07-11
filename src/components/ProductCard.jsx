import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

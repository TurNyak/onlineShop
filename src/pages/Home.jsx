import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <ProductList />
    </div>
  );
};
export default Home;

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";
import "./index.css";

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-100 min-h-screen dark:bg-gray-900 dark:text-white transition">
        <Navbar />
        <Home />
      </div>
    </CartProvider>
  );
}

export default App;

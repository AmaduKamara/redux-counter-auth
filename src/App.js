import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Counter from "./pages/Counter";
import Products from "./pages/Products";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="py-16 px-56">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

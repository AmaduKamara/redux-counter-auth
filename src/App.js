import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Counter from "./pages/Counter";
import Profile from "./components/Profile";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Navbar />
      <div className="py-16 px-56">
        {!isAuth && <Auth />}
        {isAuth && <Profile />}
        <Routes>{isAuth && <Route path="/" element={<Counter />} />}</Routes>
      </div>
    </>
  );
};

export default App;

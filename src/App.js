import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartInfoPage from "./pages/CartInfoPage/CartInfoPage";

function App() {
  return (
    <Routes>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/product/:id" element={<ProductInfoPage />}></Route>
      <Route path="/cart" element={<CartInfoPage />}></Route>
    </Routes>
    //<Popup></Popup>
  );
}

export default App;

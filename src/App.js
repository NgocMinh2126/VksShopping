import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/product/:id" element={<ProductInfoPage />}></Route>
    </Routes>
  );
}

export default App;

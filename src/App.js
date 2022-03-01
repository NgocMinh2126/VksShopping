import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Popup from "./common/Popup/Popup";

function App() {
  return (
    // <Routes>
    //   <Route path="/product" element={<ProductPage />}></Route>
    //   <Route path="/product/:id" element={<ProductInfoPage />}></Route>
    // </Routes>
    <Popup></Popup>
  );
}

export default App;

import "./App.css";
import MainInfo from "./pages/ProductInfoPage/child/MainInfo";
import ProductInfoPage from "./pages/ProductInfoPage/ProductInfoPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      {/* <ProductPage></ProductPage> */}
      {/* <MainInfo></MainInfo> */}
      <ProductInfoPage></ProductInfoPage>
    </div>
  );
}

export default App;

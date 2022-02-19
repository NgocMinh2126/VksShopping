import "./App.css";
import Categories from "./common/Categories";

import Categorycard from "./common/Categorycard";
import Footer from "./common/Footer";
import Header from "./common/Header";
import HomeBanner from "./common/HomeBanner";
import ListProduct from "./pages/ListProduct";

function App() {
  return (
    <div className="App">
      <Categories></Categories>
      <ListProduct />
    </div>
  );
}

export default App;

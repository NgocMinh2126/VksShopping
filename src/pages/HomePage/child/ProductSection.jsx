import Slider from "react-slick/lib/slider";
import NextButton from "../../../common/NextButton";
import PreviousButton from "../../../common/PreviousButton";
import ProductCard from "../../../common/Productcard";
export default function ProductSection(props) {
  let { title, listProduct } = props;
  var setting = {
    infinite: listProduct.length > 5,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />
  }
  function createProductCard(products) {
    return products.map((v) => (
      <div className="product-section" key={v._id}>
        <ProductCard
          key={v._id}
          _id={v._id}
          name={v.name}
          image={v.images}
          pricebefore={v.before_discount_price}
          priceafter={v.after_discount_price}
          sold={v.sold}
        />
      </div>
    ))
  }
  return (
    <div className="product-section-container">
      <h3 className="title">{title}</h3>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...setting}>
          {createProductCard(listProduct)}
        </Slider>
      </div>
    </div>
  );
}
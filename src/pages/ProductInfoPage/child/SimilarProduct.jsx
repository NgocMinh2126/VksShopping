import Slider from "react-slick";
import NextButton from "../../../common/NextButton";
import PreviousButton from "../../../common/PreviousButton";
import ProductCard from "../../../common/Productcard"
export default function SimilarProduct(props) {
  let { listSimilar } = props
  var setting = {
    infinite: listSimilar.length > 5,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PreviousButton />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: listSimilar.length > 2,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          infinite: listSimilar.length > 3,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          infinite: listSimilar.length > 4,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
    ]
  }
  function createProductCard(data) {
    return data.map((v, i) => (
      <div className="card-container" key={v._id}>
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
    ));
  }
  return (
    <div className="similar-product">
      <h3 >Sản phẩm tương tự</h3>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...setting}>
          {createProductCard(listSimilar)}
        </Slider>
      </div>
    </div>
  );
}
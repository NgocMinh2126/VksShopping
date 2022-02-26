import Slider from "react-slick";
import ProductCard from "../../../common/Productcard"
export default function SimilarProduct(props) {
  let product = [{
    "_id": "61c04f473b122c8fa6bf2c6f",
    "name": "Nước tẩy trang Bioderma H2O ",
    "images": [
      "https://i.ibb.co/2W6vXF0/249664021-182787813940999-5598340335826110154-n.jpg"
    ],
    "after_discount_price": 371000,
    "before_discount_price": 400000
  },
  {
    "_id": "61c04f473b122c8fa6bf2c70",
    "name": " Kem dưỡng giảm mụn La Roche Posay Effaclar Duo+ ",
    "images": [
      "https://i.ibb.co/XLjWq5w/247701437-1113273952542227-4969910138773056146-n.jpg"
    ],
    "after_discount_price": 455000,
    "before_discount_price": 470000
  }, {
    "_id": "61c04f473b122c8fa6bf2c71",
    "name": "Tinh chất Estée LauderAdvanced Night Repair Intense Reset Concentrate",
    "images": [
      "https://i.ibb.co/p0FMhzd/267837554-966884884184778-3197383645920693791-n.jpg"
    ],
    "after_discount_price": 1869000,
    "before_discount_price": 1889000
  },
  {
    "_id": "61c04f473b122c8fa6bf2c72",
    "name": "Serum Vichy Mineral 89 ",
    "images": [
      "https://i.ibb.co/mFBkvCP/248056546-479663070053440-5335983347524465388-n.jpg"
    ],
    "after_discount_price": 880000,
    "before_discount_price": 890000
  },
  {
    "_id": "61c04f473b122c8fa6bf2c73",
    "name": "Tinh Chất Dưỡng Ẩm Trà Xanh Innisfree Green Tea Seed Serum ",
    "images": [
      "https://i.ibb.co/17t4rxb/255907134-614492083303202-1006120728328064868-n.jpg"
    ],
    "after_discount_price": 310000,
    "before_discount_price": 330000
  },
  {
    "_id": "61c04f473b122c8fa6bf2c74",
    "name": "Kem chống nắng Anessa",
    "images": [
      "https://i.ibb.co/pXqgLHx/267641428-624322108836893-2891637621252610689-n.jpg"
    ],
    "after_discount_price": 655000,
    "before_discount_price": 670000
  }]
  var setting = {
    infinite: product.length > 5,
    slidesToShow: 5,
    slidesToScroll: 1,
  }
  function createProductCard(data) {
    return data.map((v, i) => (
      <ProductCard
        key={v._id}
        name={v.name}
        image={v.images}
        pricebefore={v.before_discount_price}
        priceafter={v.after_discount_price}
        sold={v.sold}
      />
    ));
  }
  return (
    <div className="similar-product">
      <div className="title">Sản phẩm tương tự</div>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <Slider {...setting}>
          <div className="flex list-product">{createProductCard(product)}</div>
        </Slider>
      </div>
    </div>
  );
}
import Slider from "react-slick";
export default function HomeBanner() {
  var bannerSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className="banners flex">
      <Slider {...bannerSettings}>
        <img src="https://i.ibb.co/CPcTTv9/96a60021c832f6509f0d54ae6f058e83.webp" alt="" />
        <img src="https://i.ibb.co/7gBwf6v/27363da83ba0345e66262d6a52cf8963.webp" alt="" />
      </Slider>
    </div>
  );
}
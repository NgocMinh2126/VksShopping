import { useState, useEffect } from "react";
import Categorycard from "./Categorycard";

export default function Categories() {
  let cateInfo = [{
    "_id": "616009262849b135681602f4",
    "name": "Làm Đẹp - Sức Khỏe",
    "image": "https://i.ibb.co/h99wZhH/cream.png"
  },
  {
    "_id": "616009022849b135681602f3",
    "name": "Đồ Chơi - Mẹ & Bé",
    "image": "https://i.ibb.co/M7Bc5QX/toys.png"
  },
  {
    "_id": "616008dd2849b135681602f2",
    "name": "Hàng Tiêu Dùng - Thực Phẩm",
    "image": "https://i.ibb.co/4Pgtn28/pet-shampoo.png"
  },
  {
    "_id": "616008ab2849b135681602f1",
    "name": "Sách - VPP & Quà Tặng",
    "image": "https://i.ibb.co/WPrX8Lc/open-book.png"
  },
  {
    "_id": "6160087d2849b135681602f0",
    "name": "Nhà Cửa Đời Sống",
    "image": "https://i.ibb.co/qd0P5Ld/frying-pan.png"
  },
  {
    "_id": "616008142849b135681602ef",
    "name": "Máy Ảnh - Quay Phim",
    "image": "https://i.ibb.co/2kFvYF1/camera.png"
  },
  {
    "_id": "616007f22849b135681602ee",
    "name": "Laptop - Thiết Bị IT",
    "image": "https://i.ibb.co/2F7VWK6/laptop.png"
  },
  {
    "_id": "616007cc2849b135681602ed",
    "name": "Phụ Kiện - Thiết Bị Số",
    "image": "https://i.ibb.co/wCRnLpL/headphones.png"
  },
  {
    "_id": "616002dbc7224529447c8ce2",
    "name": "Điện Tử - Điện Lạnh",
    "image": "https://i.ibb.co/PN9bpBB/television.png"
  },
  {
    "_id": "615ed53cb3448c41aaf741ee",
    "name": "Điện Thoại - Máy Tính Bảng",
    "image": "https://i.ibb.co/4Nt40Y9/smartphone.png"
  }];
  // const [cateInfo, setCateInfo] = useState(null);

  // useEffect(() => {
  //   fetch("https://immense-shelf-19793.herokuapp.com/api/category")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCateInfo(JSON.stringify(json));
  //       console.log(json.data);
  //     })
  // }, []);
  return (
    <div className="category-container">
      {cateInfo.map((v, i) => {
        return (<Categorycard key={v._id} image={v.image} name={v.name}></Categorycard>);
      })}
    </div>
  );
}
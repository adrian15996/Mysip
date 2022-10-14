import React, { useState } from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const ProductList = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [number, setNumber] = useState(5);

  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };
  React.useEffect(() => {
    if (pageWidth <= 1350 && pageWidth > 1080) {
      setNumber(4);
    } else if (pageWidth <= 1080 && pageWidth > 800) {
      setNumber(3);
    } else if (pageWidth <= 800) {
      setNumber(2);
    } else {
      setNumber(5);
    }
    console.log(number, pageWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const products = [
    {
      id: 1,
      images:
        "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/309275482_1247857752424010_7370257508517236992_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=6593Y-AGOjwAX8aGNTo&_nc_ht=scontent.fupn2-1.fna&oh=00_AT8BmeUeHxjRIIRz0FZEFZUg9CtOJoNEo5fJxjyA9GyTiw&oe=634604D9",
      price: 1600,
      title: "instalacion de aires acondicionado",
    },
    {
      id: 2,
      images:
        "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/308791117_1240767779799674_7368721851622388541_n.jpg?stp=dst-jpg_s600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=E4TkHDC6zsMAX9dgH2h&tn=UbdAw3qUS0mcSGON&_nc_ht=scontent.fupn2-1.fna&oh=00_AT8zKabsFzvnM7wptTMKEoNljmQ5j4_TPh3KsTa7JDybYg&oe=6344F0B5",
      price: 490,
      title: "Mantenimientos",
    },
    {
      id: 3,
      images:
        "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/308591907_1239944956548623_844560468527732519_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Fk_SS8uJPa4AX9kIWr6&_nc_ht=scontent.fupn2-1.fna&oh=00_AT9xodJ6mGY5sphoBEc8MCXnJMW-h6-FXc6OVapNvIUf7Q&oe=6346006A",
      price: 600,
      title: "desinstalacion de aires acondicionado",
    },
  ];

  return (
    <section className="main-container">
      <div className="ProductList">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          slidesPerView={number}
          spaceBetween={30}
          className="myswipper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductList;

import React from "react";
import styles from "../styles/Slider.module.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousell.css";
import image1 from "../assets/promotion 1.png";
import image2 from "../assets/promotion2.png";
const SliderHome = () => {
  //Variables y estados
  const mockImages = [
    "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/308059990_1237076386835480_7412913032067300122_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mtpNz7zrCZYAX-mvXuu&tn=UbdAw3qUS0mcSGON&_nc_ht=scontent.fupn2-1.fna&oh=00_AT_MHPzfdoEipn-6VQdHp3GnuuG9gT-_1iCjrLwzTkEHTQ&oe=633467DD",
    "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/307088129_1237077616835357_7895165445728273490_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_ueKVUDWSBgAX9Rzree&tn=UbdAw3qUS0mcSGON&_nc_ht=scontent.fupn2-1.fna&oh=00_AT9bzL5v8_Ma0wc-67hdp3UtmNmemIs3r8XhXjsilcHwHA&oe=63340655",
    "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/274659131_1104556983420755_8957816610137331670_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3kIXEfQRUP0AX9H24y1&_nc_ht=scontent.fupn2-1.fna&oh=00_AT8NDPbAH-fvg1pqygsuzmipmY-dLnnpep1mCLoyyR8oJQ&oe=63337BC0",
  ];

  return (
    //contenedor principal
    <Carousel
      width={"100%"}
      autoPlay
      interval={3000}
      axis="horizontal"
      infiniteLoop
      swipeable
      className={styles.container}
    >
      <div>
        <img src={image1} />
      </div>
      <div>
        <img src={image2} />
      </div>
      <div>
        <img src="https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/274659131_1104556983420755_8957816610137331670_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3kIXEfQRUP0AX9H24y1&_nc_ht=scontent.fupn2-1.fna&oh=00_AT8NDPbAH-fvg1pqygsuzmipmY-dLnnpep1mCLoyyR8oJQ&oe=63337BC0" />
      </div>
    </Carousel>
  );
};

export { SliderHome };

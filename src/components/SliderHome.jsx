import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Slider.module.css";
const SliderHome = () => {
  //Variables y estados
  const mockImages = [
    "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/308059990_1237076386835480_7412913032067300122_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=mtpNz7zrCZYAX-mvXuu&tn=UbdAw3qUS0mcSGON&_nc_ht=scontent.fupn2-1.fna&oh=00_AT_MHPzfdoEipn-6VQdHp3GnuuG9gT-_1iCjrLwzTkEHTQ&oe=633467DD",
    "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/307088129_1237077616835357_7895165445728273490_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=_ueKVUDWSBgAX9Rzree&tn=UbdAw3qUS0mcSGON&_nc_ht=scontent.fupn2-1.fna&oh=00_AT9bzL5v8_Ma0wc-67hdp3UtmNmemIs3r8XhXjsilcHwHA&oe=63340655",
    "https://scontent.fupn2-1.fna.fbcdn.net/v/t39.30808-6/274659131_1104556983420755_8957816610137331670_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=3kIXEfQRUP0AX9H24y1&_nc_ht=scontent.fupn2-1.fna&oh=00_AT8NDPbAH-fvg1pqygsuzmipmY-dLnnpep1mCLoyyR8oJQ&oe=63337BC0",
  ];
  const [actualImage, setActualImage] = React.useState(0);
  const cantidad = mockImages?.length;
  //return premature para evitar errores
  if (!Array.isArray(mockImages) || cantidad === 0) {
    return;
  }
  //funciones
  const handleCarrouselLeftClick = () => {
    setActualImage(actualImage === cantidad - 1 ? 0 : actualImage - 1);
  };
  const handleCarrouselRightClick = () => {
    setActualImage(actualImage === cantidad - 1 ? 0 : actualImage + 1);
  };
  return (
    //contenedor principal
    <div className={styles.container}>
      <button onClick={handleCarrouselLeftClick}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div>
        {mockImages.map((imagen, index) => {
          return (
            <div
              className={
                actualImage === index
                  ? `${styles.slide} ${styles.active}`
                  : styles.slide
              }
            >
              {actualImage === index && (
                <img key={index} src={imagen} alt="imagen" />
              )}
            </div>
          );
        })}
      </div>
      <button onClick={handleCarrouselRightClick}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export { SliderHome };

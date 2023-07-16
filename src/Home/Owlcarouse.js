import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import photo from "../img/about.jpg";
const Owlcarouse = () => {
  return (
    <div class="container-fluid">
      <OwlCarousel items={3} className="owl-theme" loop={false} nav margin={8}>
        <div>
          <img className="img" src={photo} />
        </div>
        <div>
          <img className="img" src={photo} />
        </div>
        <div>
          <img className="img" src={photo} />
        </div>
        <div>
          <img className="img" src={photo} />
        </div>
        <div>
          <img className="img" src={photo} />
        </div>
        <div>
          <img className="img" src={photo} />
        </div>
        <div>
          <img className="img" src={photo} />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Owlcarouse;

import React  from "react";
import Slider from "react-slick";
import Image from "../images/Image"
import "../styles/common.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rolex1 from "../img/rolex1.png";
import rolex2 from "../img/rolex2.png";
import rolex4 from "../img/rolex4.png";
import hublot1 from "../img/hublot1.png";


function Dots() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <Slider className="center" {...settings}>
        <div >
          <Image imgPath={rolex1} />
        </div>
        <div >
          <Image imgPath={rolex2} />
        </div>
        <div >
          <Image imgPath={rolex4} />
        </div>
        <div>
          <Image imgPath={hublot1} />
        </div>
      </Slider>
    );
}
export default Dots;
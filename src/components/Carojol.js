import "./Carojol.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { useRef } from "react";
import SliderContantData from "../sliderData";


function Carojol() {
    let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
      <div className="Carojol">
        <div className="container">
          <Slider
            className="CarojolOne"
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {/* slide1*/}
            {SliderContantData.map((item) => (
              <div key={item.id} className="slide">
                <img
                  src={item.img}
                  alt=""
                  className="IgpImage"
                />
                <p className="igpSpece">{item.title}</p>
              </div>
            ))}

            {/* slide2 */}
            {/* <div className="slide">
                            <img
                            src="https://www.police.gov.bd/storage/upload/gallery/kdXeIE3xgKUnP4b4JzJb0PVDSwhPLIit3j3ernoR.jpg"
                            alt=""
                            className="IgpImage"
                                />
                            <p className="igpSpece">নভাগত আইজিপি মহোদয়ের প্রেস বিজ্ঞপ্তি</p>
                    </div> */}
          </Slider>
          {/* slider button */}
          <div className="button-container">
            {/* left arrow */}
            <button onClick={previous} className="left">
              <RiArrowLeftWideLine />
            </button>
            {/* right arrow */}
            <button onClick={next} className="right">
              <RiArrowRightWideLine />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Carojol;
import Slider from "react-slick";
import "../index.scss";
import { dataSection3 } from "../../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    centerMode: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      <section className="padding" id="section-3"></section>
      <section className="section-3" id="section-3">
        <Slider {...settings}>
          {dataSection3.map((item, index) => {
            const { description, logo, series, checkList, logoCheckList } =
              item;
            return (
              <div key={index} className="card-section3">
                <div className="text-card-section3">
                  <div className="logo">{logo}</div>
                  <h1>{description}</h1>
                  <span style={{ textAlign: "center" }}>{series}</span>
                  <div className="card-list">
                    {checkList.map((item, index) => {
                      return (
                        <div key={index} className="list">
                          <div>{logoCheckList}</div>
                          <span>{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default Section3;

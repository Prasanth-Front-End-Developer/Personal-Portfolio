import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import HRMS from "../../img/HRMS.png";
import FlipCard from "../../img/FlipCard.png";
import Firegram from "../../img/Firegram.png";
import Hulu from "../../img/Hulu.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={HRMS} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={FlipCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hulu} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Firegram} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Testimonial.css";

import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Project Link</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <ol>
      <li>
      <a href="https://flipcart-clone-five.vercel.app/" target="_blank" rel="noopener noreferrer">
        Flipcart-clone Project
      </a>
      </li>
      <li>
      <a href="https://hulu-clone-lac-omega.vercel.app/" target="_blank" rel="noopener noreferrer">
        Hulu-clone Project
      </a>
      </li>
      <li>
      <a href="https://shoping-cart-three.vercel.app/" target="_blank" rel="noopener noreferrer">
        Shoping-cart Project
      </a>
      </li>
      <li>
      <a href="https://curd-seven.vercel.app/" target="_blank" rel="noopener noreferrer">
        Curd-Project
      </a>
      </li>
      <li>
      <a href="https://login-eta-two.vercel.app/" target="_blank" rel="noopener noreferrer">
        Login-Project
      </a>
      </li>
      </ol>
    </div>
    
  );
};

export default Testimonial;

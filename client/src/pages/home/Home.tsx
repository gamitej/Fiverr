import "./Home.scss";
import React from "react";
// components
import Feature from "./feeature/Feature";
import TrustedBy from "./trustedBy/TrustedBy";
import Slide from "@/components/Silder/Slide";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
// data
import { cardsData } from "@/data/catCard.data";

const data = [
  {
    img: "./img/check.png",
    title: "The best for every budget",
    para: "Find high-quality services at every price porint. No hourly rates,just project-based pricing.",
  },
  {
    img: "./img/check.png",
    title: "The best for every budget",
    para: "Find high-quality services at every price porint. No hourly rates,just project-based pricing.",
  },
  {
    img: "./img/check.png",
    title: "The best for every budget",
    para: "Find high-quality services at every price porint. No hourly rates,just project-based pricing.",
  },
];

const Home = () => {
  return (
    <div className="home">
      <Feature />
      <TrustedBy />
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cardsData.map((item, idx) => (
          <CategoryCard item={item} key={`card-cat-${idx}`} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            {data.map((item) => (
              <React.Fragment>
                <div className="title">
                  <img src={item.img} alt="" />
                  {item.title}
                </div>
                <p>{item.para}</p>
              </React.Fragment>
            ))}
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

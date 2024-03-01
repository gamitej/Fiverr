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
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

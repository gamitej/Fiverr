import "./Slide.scss";
import Slider from "infinite-react-carousel";
// data
import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  slidesToShow?: number;
  arrowsScroll?: number;
}

const Slide = ({
  children,
  slidesToShow = 1,
  arrowsScroll = 1,
}: SlideProps) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;

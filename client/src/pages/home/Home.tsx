// components
import Feature from "./feeature/Feature";
import TrustedBy from "./trustedBy/TrustedBy";
import Slide from "@/components/Silder/Slide";
import CategoryCard from "@/components/CategoryCard/CategoryCard";
// data
import { cardsData } from "@/data/catCard.data";

const Home = () => {
  return (
    <div>
      <Feature />
      <TrustedBy />
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cardsData.map((item, idx) => (
          <CategoryCard item={item} key={`card-cat-${idx}`} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;

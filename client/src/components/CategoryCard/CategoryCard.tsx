import { Link } from "react-router-dom";
import "./CategoryCard.scss";
import { CardsDataType } from "@/data/catCard.data";

interface CategoryCardProps {
  item: CardsDataType;
}

const CategoryCard = ({ item }: CategoryCardProps) => {
  return (
    <Link to={`/gigs?cat=design`}>
      <div className="catCard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CategoryCard;

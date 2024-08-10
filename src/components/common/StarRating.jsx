import { FaStar } from "react-icons/fa";

const StarRating = ({ count }) => {
  return (
    <div className="stars">
      {[...Array(count)].map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );
};
export default StarRating;
import { FaStar } from "react-icons/fa";

interface RatingProps {
  rating: number; // Define the type for the rating prop
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    const filledStars = Math.floor(rating); // Number of filled stars
    const hasHalfStar = rating - filledStars >= 0.5; // Check if there is a half-filled star

    // Add filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }

    // Add half-filled star if applicable
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half-filled" />);
    }

    // Add empty stars to complete the rating
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  return (
    <div className="rating items-center">
      {renderStars()}
      <span className="rating-value text-[#969BA1] ">{rating} / 5</span>
    </div>
  );
};

export default Rating;

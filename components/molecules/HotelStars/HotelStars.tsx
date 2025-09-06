import { FaStar } from "react-icons/fa";

import { HotelStarsProps } from "./type";

const HotelStars = ({ starCount }: HotelStarsProps) => {
  return (
    <div className="flex gap-1">
      {[...Array(starCount)].map((_, index) => {
        return <FaStar key={index} className="text-amber-300 w-6 h-5"/>;
      })}
    </div>
  );
};

export default HotelStars;

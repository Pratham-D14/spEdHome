// components/Card.jsx
import { Star } from "lucide-react";

export default function Card({ name, stars, description, image }) {
  const totalStars = 5;

  return (
    <div className="relative bg-white shadow-md rounded-xl px-6 pt-6 pb-6 w-72 text-center">
      <div className="absolute -top-10 left-0 transform -translate-x-1/2">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full shadow-md"
        />
      </div>

      <h3 className="text-lg font-semibold">{name}</h3>

      <div className="flex justify-center mt-2 mb-2">
        {Array.from({ length: totalStars }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < stars ? "fill-yellow-400 text-yellow-400" : "text-yellow-300"
            }
          />
        ))}
      </div>

      <p className="text-gray-600 text-sm text-left w-full mt-6">
        {description}
      </p>
    </div>
  );
}

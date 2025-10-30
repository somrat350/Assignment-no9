import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  const { serviceId, image, serviceName, description, rating, price } = service;
  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 duration-300"
    >
      <img
        src={image || "/placeholder.svg"}
        alt={serviceName}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2 line-clamp-1">{serviceName}</h3>
        <p className="text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <FaStar size={16} className="fill-amber-500 text-accent" />
            <span className="text-sm font-semibold">{rating}</span>
          </div>
          <span className="text-lg font-bold text-primary">{price}</span>
        </div>

        <Link to={`/services/${serviceId}`} className="w-full btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

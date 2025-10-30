import { Link } from "react-router";
import useData from "../Hooks/UseData";
import ServiceCard from "./ServiceCard";
import Loading from "./Loading";

const PopularServices = () => {
  const { data, loading } = useData();
  if (loading) return <Loading />;
  const firstEight = data.slice(0, 8);

  return (
    <div data-aos="fade-up" className="mt-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          Popular Winter Care Services
        </h2>
        <p className="text-gray-400">
          Professional care tailored for the cold season
        </p>
      </div>
      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {firstEight.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>
      <div className="flex justify-center mt-16">
        <Link className="btn btn-primary" to="/services">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;

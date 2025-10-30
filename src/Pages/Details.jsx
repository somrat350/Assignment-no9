import { useParams } from "react-router";
import useData from "../Hooks/UseData";
import { FaStar } from "react-icons/fa";
import Loading from "../components/Loading";
import toast from "react-hot-toast";
import ServiceNotFound from "../components/ServiceNotFound";

const Details = () => {
  const { data, loading } = useData();
  const { serviceId } = useParams();
  const id = Number(serviceId);

  if (loading) return <Loading />;

  const matched = data.find((d) => d.serviceId === id);

  if (!matched) return <ServiceNotFound />;

  const {
    serviceName,
    description,
    image,
    category,
    price,
    rating,
    slotsAvailable,
    providerName,
    providerEmail,
  } = matched;

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Service Booked Successful.");
    e.target.reset();
  };

  return (
    <div data-aos="fade-up" className="max-w-7xl mx-auto p-5 mt-10">

      <title>{`${serviceName}`}</title>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="">
          <img
            className="rounded-xl w-full max-w-[400px] h-full"
            src={image}
            alt={serviceName}
          />
        </div>
        <div className="p-2 flex flex-col gap-3">
          <h2 className="text-2xl lg:text-4xl font-bold">{serviceName}</h2>
          <p className="text-lg">
            Description: <span className="text-gray-400">{description}</span>
          </p>
          <p className="text-lg">
            Category: <span className="text-amber-600">{category}</span>
          </p>
          <div className="flex lg:flex-col gap-4 lg:gap-2">
            <span>
              Price: <span className="text-primary">{price}</span>
            </span>
            <span className="flex gap-2">
              Rating:{" "}
              <span className="text-amber-600 flex items-center gap-0.5">
                <FaStar />
                {rating}
              </span>
            </span>
            <span>
              Available Slots:
              <span className="text-amber-600"> {slotsAvailable}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold underline">
          Provider Information
        </h2>
        <h2 className="text-xl font-medium">
          Name: <span className="text-amber-600">{providerName}</span>
        </h2>
        <h2 className="text-xl font-medium">
          Email: <span className="text-amber-600">{providerEmail}</span>
        </h2>
      </div>
      <div className="mt-10">
        <h2 className="text-center text-2xl font-bold underline">
          Book The Service
        </h2>
        <form
          onSubmit={handleSubmit}
          className="mt-5 grid md:grid-cols-2 gap-5"
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="input w-full border border-gray-500 placeholder:text-gray-500"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="input w-full border border-gray-500 placeholder:text-gray-500"
            required
          />
          <button className="btn btn-primary col-span-full">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default Details;

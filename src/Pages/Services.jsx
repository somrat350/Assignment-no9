import { useEffect, useState } from "react";
import useData from "../Hooks/UseData";
import ServiceCard from "../components/ServiceCard";
import Loading from "../components/Loading";

const Services = () => {
  const { data, loading } = useData();
  const [src, setSrc] = useState("");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (src === "") {
      return;
    }
    setLoad(true);
    const timer = setTimeout(() => setLoad(false), 500);
    return () => clearTimeout(timer);
  }, [src]);

  if (loading) return;

  const normalize = (text) => text.trim().replace(/\s+/g, " ").toLowerCase();

  const finalAllData = data.filter((d) => {
    const term = normalize(src);
    return normalize(d.serviceName).includes(term) || normalize(d.serviceName).includes(term);
  });

  return (
    <div className='max-w-7xl mx-auto p-5 mt-10'>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Our all services</h2>
        <p className="text-[#627382] text-xl mt-3">
          Explore All services for get knowledge on pets caring in winter.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5 justify-between items-center mt-10">
        <h2 className="font-semibold text-2xl">
          ({finalAllData.length}) Services Found
        </h2>
        <label className="input border-gray-500">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
          />
        </label>
      </div>
      {load ? (
        <Loading/>
      ) : finalAllData.length === 0 ? (
        <span>search not found</span>
      ) : (
        <div data-aos="fade-up" className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      {
        finalAllData.map(service=><ServiceCard key={service.serviceId} service={service} />)
      }
    </div>
      )}
    </div>
  );
};

export default Services;

import { useNavigate } from 'react-router';
import errorImg from '../assets/error-service.png';

const ServiceNotFound = () => {
  const navigate = useNavigate();

  return (
    <div data-aos="fade-up" className='max-w-7xl mx-auto px-5 flex flex-col items-center gap-5 py-10'>

      <title>Service not found | Pet Care</title>

      <div className="flex justify-center">
        <img src={errorImg} alt="" />
      </div>
      <div className="text-center">
      <h2 className="text-4xl font-bold">Oops, service not found!</h2>
      <p className="text-xl mt-3">The service you are looking for is not available.</p>
    </div>
      <button onClick={()=>navigate(-1)} className="btn btn-primary font-semibold w-fit px-10">Go Back!</button>
    </div>
  );
};

export default ServiceNotFound;
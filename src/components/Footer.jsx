import { Link } from "react-router";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  
  return (
    <footer data-aos="fade-up" className="mt-10 bg-[#1d232a] border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-5 py-5">
        <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-14 h-14" src="/logo.png" alt="" />
            <h2 className="text-white font-bold text-2xl">Pet Care</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link to="https://www.facebook.com/profile.php?id=61564941795910" target="_blank"><FaFacebook className="text-white text-2xl"/></Link>
            <Link to="/"><FaTwitter className="text-white text-2xl"/></Link>
            <Link to="/"><FaLinkedin className="text-white text-2xl"/></Link>
            <Link to="/"><FaInstagram className="text-white text-2xl"/></Link>
            <Link to="https://github.com/somrat350" target="_blank"><FaGithub className="text-white text-2xl"/></Link>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-center items-center gap-5 text-xl text-white font-medium">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/about">About</Link>
        </div>
        <h2 className="text-center text-white font-medium text-lg border-t border-gray-400 mt-5 pt-5">
          Copyright © 2025 - All right reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

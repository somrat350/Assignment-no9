import { Outlet, useLocation } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

const Root = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000, delay: 200 });
  }, []);

  useEffect(() => {
    setShowLoader(true);
    let timer;
    timer = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (showLoader) {
    return (
      <div className="h-screen flex items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <Header />
      <div className="grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;

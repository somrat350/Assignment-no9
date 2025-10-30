<<<<<<< HEAD
import React from 'react';

const Root = () => {
  return (
    <div>
      
=======
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import 'animate.css';
import Aos from "aos";

const Root = () => {
  const location = useLocation()
  const [showLoader, setShowLoader] = useState(true);

  useEffect(()=>{
    Aos.init({duration: 1000,delay: 200})
  },[])

  useEffect(()=>{
    setShowLoader(true)
    let timer;
    timer = setTimeout(()=> setShowLoader(false),500)
    return ()=> clearTimeout(timer)
  },[location.pathname])

  if (showLoader) {
    return (
      <div className="h-screen flex items-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster/>
      <Header/>
      <div className="grow">
        <Outlet />
      </div>
      <Footer/>
>>>>>>> 2a673b2 (completed full project)
    </div>
  );
};

<<<<<<< HEAD
export default Root;
=======
export default Root;
>>>>>>> 2a673b2 (completed full project)

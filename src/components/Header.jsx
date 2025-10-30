import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Header = () => {
  const [toggleMenu,setToggleMenu] = useState(false)
  const {user,userLoading,signout} = useContext(AuthContext)

  if(userLoading)return

  const menuLink = (
    <>
      <NavLink className="text-lg font-medium navLink" to="/">
        Home
      </NavLink>
      <NavLink className="text-lg font-medium navLink" to="/services">
        Services
      </NavLink>
      <NavLink className="text-lg font-medium navLink" to="/profile">
        My Profile
      </NavLink>
    </>
  );
  const menuLinkRight = (
    <>
      <Link className="text-lg font-medium underline" to="/signin">
        Login / Register
      </Link>
    </>
  );


  return (
    <header className="sticky top-0 border-b border-gray-100/10 z-50 bg-[#1d232a] shadow-2xl">
      <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <FaBars onClick={()=>setToggleMenu(true)} className="md:hidden text-2xl cursor-pointer" />
          <Link to="/" className="flex items-center animate__animated animate__fadeInLeft">
            <img className="h-16 w-16" src="/logo.png" alt="" />
            <span className="hidden sm:flex font-bold text-2xl">Pet Care</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-5 items-center">{menuLink}</div>
        {
          user?
          <div className="flex gap-3 items-center">
          <img className="h-10 w-10 rounded-full cursor-pointer animate__animated animate__zoomIn" title={user.displayName} src={user.photoURL || "/user.png"} alt="" />
          <button onClick={signout} className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg">Logout</button>
        </div>:
        <div className="flex gap-3 items-center">{menuLinkRight}</div>
        }
        
        <div className={`md:hidden absolute top-0 left-0 h-screen w-[320px] p-5 bg-white text-black duration-500 ${toggleMenu?"translate-x-0":"-translate-x-full"}`}>
          <div className="flex justify-end mb-5">
            <FaXmark onClick={()=>setToggleMenu(false)} className="text-2xl cursor-pointer"/>
          </div>
          <div className="flex flex-col gap-5 text-center">
            {menuLink}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

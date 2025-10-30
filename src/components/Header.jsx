import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import ThemeToggler from "./ThemeToggler";
import Loading from "./Loading";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, userLoading, signout } = useContext(AuthContext);

  const get = localStorage.getItem("assignment-no9");
  const getTheme = JSON.parse(get ? get : "true");

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("assignment-no9", JSON.stringify(theme));
  }, [theme]);

  if (userLoading) return <Loading />;

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
      <div className="flex justify-center sm:hidden">
        <ThemeToggler theme={theme} setTheme={setTheme} />
      </div>
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
    <header
      data-aos="fade-down"
      className="sticky top-0 border-b border-gray-100/10 z-50 bg-base-100 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center">
        <div className="flex items-center gap-5">
          <FaBars
            onClick={() => setToggleMenu(true)}
            className="md:hidden text-2xl cursor-pointer"
          />
          <Link
            to="/"
            className="flex items-center animate__animated animate__fadeInLeft"
          >
            <img className="h-16 w-16" src="/logo.png" alt="" />
            <span className="hidden sm:flex font-bold text-2xl">Pet Care</span>
          </Link>
        </div>
        <div className="hidden md:flex gap-5 items-center">{menuLink}</div>
        {user ? (
          <div className="flex gap-3 items-center">
            <div className="hidden sm:flex">
              <ThemeToggler theme={theme} setTheme={setTheme} />
            </div>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName}
            >
              <img
                className="h-10 w-10 rounded-full cursor-pointer animate__animated animate__zoomIn"
                // title={user.displayName}
                src={user?.photoURL || "/user.png"}
                alt=""
              />
            </div>

            <button
              onClick={signout}
              className="btn bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-3 items-center">
            <div className="hidden sm:flex">
              <ThemeToggler theme={theme} setTheme={setTheme} />
            </div>
            {menuLinkRight}
          </div>
        )}

        <div
          className={`md:hidden absolute top-0 left-0 h-screen w-[320px] p-5 bg-white text-black duration-500 ${
            toggleMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-5">
            <FaXmark
              onClick={() => setToggleMenu(false)}
              className="text-2xl cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-5 text-center">{menuLink}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;

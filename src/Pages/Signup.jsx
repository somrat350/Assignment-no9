import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash, FaUser } from "react-icons/fa";
import { MdEmail, MdImage } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

const Signup = () => {
  const { user, userLoading,setUserLoading, createUEP, createUG, updateUser } = useContext(AuthContext);
  const [passValidateText, setPassValidateText] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user && !userLoading) {
      navigate(from, { replace: true });
    }
  }, [user, userLoading, navigate, from]);

  if (userLoading) return <Loading />;

  const passwordValidate = (e) => {
    const tempPass = e.target.value;

    if (!/[a-z]/.test(tempPass)) {
      setPassValidateText("Password must contain lowercase.");
      return;
    } else if (!/[A-Z]/.test(tempPass)) {
      setPassValidateText("Password must contain Uppercase.");
      return;
    } else if (tempPass.length < 6) {
      setPassValidateText("Password must 6 letters.");
      return;
    } else {
      setPassValidateText("");
      setPassword(tempPass);
      return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const profilePic = e.target.profilePic.value;

    if (!password) {
      toast.error("Please enter validate password!");
      return;
    }

    const updatedObj = {
      displayName: name,
      photoURL: profilePic,
    };

    createUEP(email, password)
      .then(() => {
        return updateUser(updatedObj);
      })
      .then(() => {
        toast.success("Sign Up successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error(
            "This email is already registered. Please log in instead."
          );
          navigate("/signin");
        } else {
          toast.error(error.message);
        }
      })
      .finally(()=>{
        setUserLoading(false)
      })
  };

  const handleCreateGoogle = () => {
    createUG()
      .then(() => {
        toast.success("Sign Up successful.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(()=>{
        setUserLoading(false)
      })
  };

  return (
    <div className="flex items-center p-5 mt-5">
      <div className="w-full max-w-5xl mx-auto">
        <div className="bg-white rounded-3xl flex flex-col sm:flex-row gap-2 overflow-hidden">
          <div className="sm:w-1/2 rounded-b-[60px] sm:rounded-s-none sm:rounded-e-[100px] flex flex-col gap-3 p-5 items-center justify-center bg-[#632EE3] text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-center">
              Hello, Welcome!
            </h2>
            <p>Already have an account?</p>
            <Link
              to="/signin"
              className="w-fit px-6 py-2 rounded-xl text-xl font-medium hover:text-[#632EE3] hover:bg-white duration-300 border border-white"
            >
              Sign In
            </Link>
          </div>

          <div className="sm:w-1/2 flex flex-col gap-4 p-5 justify-center">
            <h2 className="text-4xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {/* name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="w-full h-10 ps-2 pe-8 border-none outline-none text-gray-600 font-medium"
                  required
                />
                <FaUser className="absolute top-1/4 right-2 text-gray-600" />
              </div>
              {/* email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full h-10 ps-2 pe-8 border-none outline-none text-gray-600 font-medium"
                  required
                />
                <MdEmail className="absolute top-1/4 right-2 text-gray-600" />
              </div>
              {/* profilePic */}
              <div className="relative">
                <input
                  type="text"
                  name="profilePic"
                  placeholder="Image url"
                  className="w-full h-10 ps-2 pe-8 border-none outline-none text-gray-600 font-medium"
                  required
                />
                <MdImage className="absolute top-1/4 right-2 text-gray-600" />
              </div>
              <div className="relative">
                <input
                  onChange={passwordValidate}
                  type={passwordType ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  className="w-full h-10 ps-2 pe-8 border-none outline-none text-gray-600 font-medium"
                  required
                />
                {passwordType ? (
                  <FaEye
                    onClick={() => setPasswordType(!passwordType)}
                    className="absolute top-1/4 right-2 text-gray-600 cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => setPasswordType(!passwordType)}
                    className="absolute top-1/4 right-2 text-gray-600 cursor-pointer"
                  />
                )}
              </div>
              <span className="text-[12px] text-right text-red-500">
                {passValidateText}
              </span>
              <button className="btn bg-[#632EE3] text-white text-lg font-medium">
                Sign Up
              </button>
            </form>
            <div className="flex items-center justify-center gap-2">
              <div className="h-0.5 w-12 bg-gray-400"></div>
              <span className="text-gray-600">or</span>
              <div className="h-0.5 w-12 bg-gray-400"></div>
            </div>
            <button
              onClick={handleCreateGoogle}
              className="btn bg-white hover:bg-gray-300 text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import { useContext, useState } from "react";
import { FaPhone, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import toast from "react-hot-toast";

const EditProfile = () => {
  const {user,updateUser} = useContext(AuthContext)
  const [name, setName] = useState(user?.displayName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");

  const handleDisable = () => {
    return name !== user?.displayName || photoUrl !== user?.photoURL;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedObj = { displayName: name, photoURL: photoUrl };
    updateUser(updatedObj)
      .then(()=>{
        toast.success("Profile updated successfully.");
      })
      .catch((error) => {
        toast.error("Failed to update profile!",error);
      })
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-10">
          {/* Name */}
          <div className="flex flex-col gap-3">
            <label htmlFor="name" className="flex items-center gap-2 text-lg">
              <FaUser />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          {/* Email */}
          <div className="flex flex-col gap-3">
            <label htmlFor="email" className="flex items-center gap-2 text-lg">
              <MdMail />
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input w-full"
              value={user?.email}
              disabled
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="photoURL"
              className="flex items-center gap-2 text-lg"
            >
              <FaUser />
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              placeholder="Enter photo URL"
              className="input w-full"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <label
              htmlFor="phoneNumber"
              className="flex items-center gap-2 text-lg"
            >
              <FaPhone />
              Mobile Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Enter your mobile number"
              className="input w-full"
              value={user.phoneNumber || "N/A"}
              disabled
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className={`btn mt-8 ${
              handleDisable() ? "btn-primary" : "btn-disabled"
            }`}
            disabled={!handleDisable()}
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

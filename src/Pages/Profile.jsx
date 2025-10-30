import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import MutedProfile from "../components/MutedProfile";
import EditProfile from "../components/EditProfile";
import Loading from "../components/Loading";

const Profile = () => {
  const { user, userLoading, updateUser } = useContext(AuthContext);
  const [editToggle, setEditToggle] = useState(false);

  if (userLoading) return <Loading />;
  const { displayName, email, photoURL } = user;

  return (
    <div className="max-w-7xl mx-auto px-5 mt-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col items-center bg-[#5754e8]/20 p-5 rounded-2xl w-full md:max-w-[320px]">
          <div className="">
            <img
              className="w-40 h-40 rounded-full animate__animated animate__zoomIn"
              src={photoURL || "/user.png"}
              alt=""
            />
          </div>
          <h2 className="mt-5 uppercase text-center font-bold text-xl">
            {displayName}
          </h2>
          <h2 className="mt-1 text-sm wrap-break-words">{email}</h2>
        </div>
        <div className="flex flex-col bg-[#5754e8]/20 p-5 rounded-2xl w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">My Profile</h2>
            <button
              onClick={() => {
                setEditToggle(!editToggle);
              }}
              className="btn"
            >
              Edit Profile
            </button>
          </div>
          <span className="border-b border-dashed my-5"></span>
          {editToggle ? (
            <EditProfile user={user} updateUser={updateUser} />
          ) : (
            <MutedProfile user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";

const MutedProfile = ({ user }) => {
  const { displayName, email, emailVerified, phoneNumber } = user;
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      <div className="">
        <h3 className="text-gray-500">Full Name</h3>
        <h2 className="uppercase">{displayName}</h2>
      </div>
      <div className="">
        <h3 className="text-gray-500">Email Status</h3>
        <h2>{emailVerified ? "Verified" : "Not Verified"}</h2>
      </div>

      <div className="">
        <h3 className="text-gray-500">Email</h3>
        <h2 className="break-words">{email}</h2>
      </div>
      <div className="">
        <h3 className="text-gray-500">Number</h3>
        <h2>{phoneNumber || "N/A"}</h2>
      </div>
    </div>
  );
};

export default MutedProfile;

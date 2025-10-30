import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import Loading from '../components/Loading';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import toast from 'react-hot-toast';

const PasswordReset = () => {
  const {passwordReset} = useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const location = useLocation()
  const prefillEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefillEmail);

  if(loading)return <Loading/>

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    setLoading(true);

    const actionCodeSettings = {
      url: "http://localhost:5173/signin",
      handleCodeInApp: false,
    };

    passwordReset(email,actionCodeSettings)
    .then(()=>{
      toast.success("success")
    })
    .catch((error)=>{
      toast.error(error)
    })
    
  }
  return (
    <div className='mt-10 max-w-7xl mx-auto p-5 min-h-[380px] flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full max-w-[380px] mx-auto border p-5 rounded-2xl'>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} value={email} required className="input w-full" />
        </div>
        <button className='btn btn-primary w-full'>Reset</button>
      </form>
    </div>
  );
};

export default PasswordReset;
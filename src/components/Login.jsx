'use client'
import React, { useState } from "react";
import image from "../img/bg.jpg";
import logo from "../img/750_netflix-removebg-preview.png";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative z-10 min-h-screen bg-cover bg-center flex justify-center items-center bg-opacity-20 " style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute top-0 left-0 inset-0 ">
        <img 
        className="h-[10rem]"
        src={logo} alt="logo" />
      </div>
      <div className='absolute inset-0 bg-black opacity-20 '></div>

      <div className="flex flex-col justify-start w-3/12 ">
        <div className="z-10 bg-black p-14 space-y-2 h-[35rem] text-white bg-opacity-70">
          <span className=" text-3xl font-bold p-2 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </span>
          <form className="flex flex-col  justify-between p-2 space-y-4 ">
             {!isSignInForm && 
             <input
              className="px-4 py-2 h-[3rem] w-full outline-none rounded-md cursor-pointer text-white bg-[#333]"
              type="text"
              placeholder="Full Name"
            />}
            <input
              className="px-4 py-2 h-[3rem] w-full outline-none rounded-md cursor-pointer text-white bg-[#333]"
              type="email"
              placeholder="Your Email or Phone No."
            />
           
            <input
              className="px-4 py-2 mb-6 h-[3rem] w-full outline-none rounded-md cursor-pointer text-white bg-[#333]"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-700 p-2 mt-[2rem] h-[3rem] w-full rounded-md cursor-pointer">
              {isSignInForm?"Sign In":"Sign Up"}
            </button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
             {isSignInForm ? "New to Netflix-GPT? Sign Up Now" : 
             "Already registerd. Sign In now."} 
            </p>
            
          </form>
        </div>
      </div>
      
    </div>
    
  );
};

export default Login;

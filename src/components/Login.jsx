import React, { useState,useRef } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import image from "../img/bg.jpg";
import logo from "../img/750_netflix-removebg-preview.png";
import {checkValidData} from "../utils/validate"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errorMessage,setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => { 
    const message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;
    if(!isSignInForm){
       // sign up logic
       createUserWithEmailAndPassword(
        auth,
        email.current.value, 
        password.current.value
        )
       .then((userCredential) => {
         const user = userCredential.user;
         updateProfile(user , {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/94467282?v=4"
        })
        .then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(
            addUser(
            {uid:uid, 
            email:email, 
            displayName: displayName, 
            photoURL:photoURL
            })
            )
          
          // Profile updated!
          navigate("/browse");
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message)
        });
        
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode+""+errorMessage);
       });

    }
    else{
       // sign in logic
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+""+errorMessage); 
  });

    }
  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div className="relative z-10 min-h-screen bg-cover bg-center flex justify-center items-center bg-opacity-20 " style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute  top-0 left-0 inset-0 bg-gradient-to-b from-black h-28 ">
        <img 
        className="h-[10rem]  p-2 "
        src={logo} alt="logo" />
      </div>
      <div className='absolute inset-0 bg-black opacity-20 '></div>

      <div className="flex flex-col justify-start w-3/12 ">
        <div className="z-10 bg-black p-14 space-y-2 h-[30rem] text-white bg-opacity-70">
          <span className=" text-3xl font-bold p-2 m-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
            </span>
          <form  onSubmit = {(e) => e.preventDefault()}className="flex flex-col  justify-between p-2 space-y-4 ">
             {!isSignInForm && 
             <input
              ref={name}
              className="px-4 py-2 h-[3rem] w-full outline-none rounded-md cursor-pointer text-white bg-[#333]"
              type="text"
              placeholder="Full Name"
            />}
            <input
              ref={email}
              className="px-4 py-2 h-[3rem] w-full outline-none rounded-md cursor-pointer text-white bg-[#333]"
              type="email"
              placeholder="Your Email or Phone No."
            />
           
            <input
              ref={password}
              className="px-4 py-2 mb-6 h-[3rem] w-full outline-none rounded-md cursor-pointer text-white bg-[#333]"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500">{errorMessage}</p>
            <button 
            className="bg-red-700 p-2 mt-[2rem] h-[3rem] w-full rounded-md cursor-pointer"
            onClick={handleButtonClick}
            >
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

import React from 'react'
import logo from "../img/750_netflix-removebg-preview.png"
import {signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
       navigate("/error");
    });
  }
  return (
    <div className="absolute  top-0 left-0 inset-0  bg-gradient-to-b from-black h-28 flex flex-row  justify-between">
       <img 
        className="h-[8rem]"
        src={logo} alt="logo" />
        <div className='flex flex-row p-8' >
           <img
           src={user?.photoURL}
           alt="Sign Out button"
           className='h-9'>
           </img>
            <button 
            onClick={handleSignOut}
            className='text-xl text-white '>
              (Sign Out)
            </button>
      </div>
    </div>
  )
}

export default Header;

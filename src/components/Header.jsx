import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* desktop and  tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out">
              About US
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all cursor-pointer ease-in-out">
              Service
            </li>
          </ul>

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center justify-center"
          >
            <MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-3 -right-2 W-5 h-5 rounded-full px-1 bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </motion.div>

          <motion.img
            whileTap={{ scale: 0.6 }}
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
            alt="Avatar"
          />
        </div>
      </div>
      {/* mobile */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;

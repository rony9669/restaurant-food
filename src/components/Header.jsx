import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Logo from "./img/logo.png";
import Avatar from "./img/avatar.png";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const login = async () => {
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
  };
  return <div>Header</div>;
};

export default Header;

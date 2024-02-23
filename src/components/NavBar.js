import React from "react";
import logo from "../assets/logos_firebase.svg";
const NavBar = () => {
  return (
    <div className="bg-white h-[60px] my-4 rounded-lg flex items-center justify-center gap-2 text-lg ">
      <img src={logo} alt="logo" />
      <h1>Firebase Contact App</h1>
    </div>
  );
};

export default NavBar;

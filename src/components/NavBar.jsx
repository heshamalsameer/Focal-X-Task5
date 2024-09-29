import React, { useState } from "react";
import NavItems from "./NavItems";
import Login from "./Login";

const NavBar = ({ logo, items, btn, menu, close }) => {
  function showMenu() {
    const menu = document.querySelector(".ulmenu");
    menu.classList.toggle("translate-x-full");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("bg-nav");
    setActive(!active);
  }
  const [active, setActive] = useState(true);
  return (
    <div className="w-full">
      <nav className=" nav flex justify-between items-center bg-nav px-5 h-[90px] lg:px-[70px]">
        <img
          src={logo}
          alt="logo..."
          className=" w-[45.9px] h-[35px] lg:w-[68.66px] lg:h-[56px]"
        />
        <div className="hidden lg:block">
          <NavItems items={items} btn={btn} />
        </div>
        <div className="hidden lg:block">
          <Login btn={btn} />
        </div>
        {active ? (
          <button className="lg:hidden " onClick={showMenu}>
            <img src={menu} alt="menu.." />
          </button>
        ) : (
          <button className="lg:hidden " onClick={showMenu}>
            <img src={close} alt="menu.." />
          </button>
        )}
      </nav>
      <div className="ulmenu lg:hidden  translate-x-full  fixed w-full transition-all transition-100 bg-white lg:bg-none ">
        <div>
          <NavItems items={items} btn={btn} />
        </div>
        <div className="mx-auto w-fit my-[60px]">
          <Login btn={btn} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

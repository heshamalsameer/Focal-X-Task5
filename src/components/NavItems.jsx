import React from "react";

const NavItems = ({ items }) => {
  return (
    <>
      <ul className="flex flex-col gap-8 lg:gap-7.5 items-center  lg:w-[439px]  lg:flex-row ">
        {items.map((ele, ind) => (
          <li
            key={ind}
            className=" min-w-fit flex text-2xl items-center w-full h-[65px]  lg:w-auto lg:h-auto lg:ps-0 lg:text-base"
          >
            {ind == 0 ? (
              <button
                className="bg-active  lg:bg-transparent rounded-[5px] w-full h-full ps-5 lg:ps-0 text-start "
                autoFocus
              >
                {ele}
              </button>
            ) : (
              <button className="border-y border-black border-solid  w-full h-full ps-5 lg:ps-0  text-start lg:border-none">
                {ele}
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavItems;

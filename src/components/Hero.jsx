import React from "react";
import hero from "./../assets/imgs/hero.png";
import location from "./../assets/imgs/location.png";
import dollar from "./../assets/imgs/dollar.png";
import house from "./../assets/imgs/house.png";
import HeroCard from "./HeroCard";

const Hero = () => {
  const heroData = [
    { img: location, title: "Location", des: "Ahmedabad, India" },
    { img: dollar, title: "Price", des: "$1000 - $10,000" },
    { img: house, title: "Type of Property", des: "Apartment" },
  ];
  return (
    <div className="bg-nav w-full h-[560px] relative px-5 lg:ps-[70px] overflow-hidden -z-20">
      <h1 className=" text-[35px] sm:text-6xl leading-[46px] sm:leading-[80px] font-bold max-w-[549px] pt-8 z-10">
        Discover a place you will love to live
      </h1>
      <p className=" text-Gray mt-5 w-[294px] sm:w-auto  max-w-[423px] leading-5 lg:leading-[26px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
        tempus felis vitae sit est quisque
      </p>
      <div className="flex flex-col md:flex-row bg-[#FFFFFFCC] gap-6 :gap-[63.68px] w-full md:w-fit py-5 px-[58px] mt-[50px] text-[16px]">
        {heroData.map((item, ind) => (
          <HeroCard img={item.img} title={item.title} des={item.des} />
        ))}
      </div>
      <img
        src={hero}
        alt="hero"
        className="absolute right-0 bottom-0 w-[900px] -z-10"
      />
    </div>
  );
};

export default Hero;

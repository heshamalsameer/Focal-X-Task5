import React from "react";

const HeroCard = ({ img, title, des }) => {
  return (
    <div className="flex items-center gap-5 w-[213.87]">
      <div className="w-[60px] h-[60px] flex justify-center items-center bg-[#F0F6FA] rounded-full">
        <img src={img} alt={title} className="w-[30px]" />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="font-meduim">{title}</p>
        <p className="text-[#222222]">{des}</p>
      </div>
    </div>
  );
};

export default HeroCard;

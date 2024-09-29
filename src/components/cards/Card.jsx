import { CiLocationOn } from "react-icons/ci";

function Card({ image }) {
  return (
    <div className="max-w-[382px] h-[447px] p-[20px] shadow-lg border-[1.5px] border-[#0000001A] rounded-[10px]">
      <img
        src={image}
        alt="card"
        className=" max-w-[342px] h-[243px] rounded-[10px] cursor-pointer"
      />
      <h3 className="font-[600] text-[18px] text-[#025595] mt-[16px]">
        $300000
      </h3>
      <p className="font-[600] text-[18px] max-w-[180px] mb-[38px]">
        Luxury Apartment in California
      </p>
      <div className="flex items-center gap-[7px]">
        <CiLocationOn className="text-[#222222]" />
        <p className="text-[14px] text-[#222222] ">
          1901 Thornridge Cir. Shiloh, Hawaii 81063
        </p>
      </div>
    </div>
  );
}

export default Card;

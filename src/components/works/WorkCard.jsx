const WorkCard = ({ icon, title, description, active, index, setactive }) => {
  return (
    <div
      className={`${
        active === index ? "bg-[#025595]" : ""
      } flex flex-col gap-[20px] rounded-[15px] px-[40px] pt-[30px] pb-[80px] max-w-[370px] cursor-pointer`}
      onClick={() => setactive(index)}
    >
      {/* <img
        src={icon}
        alt=""
        className={`${
          active === index ? "text-white" : "text-[#025595]"
        } w-[42px] h-[40px]`}
      /> */}
      <div
        className={`${active === index ? "text-white" : "text-[#222222]"}  `}
      >
        {icon()}
      </div>
      <h3
        className={`${
          active === index ? "text-white" : "text-[#222222]"
        } font-[600] text-[22px] `}
      >
        {title}
      </h3>
      <p
        className={`${
          active === index ? "text-[#FFFFFF]" : "text-[#22222280]"
        } text-[14px] `}
      >
        {description}
      </p>
    </div>
  );
};
// #025595
export default WorkCard;

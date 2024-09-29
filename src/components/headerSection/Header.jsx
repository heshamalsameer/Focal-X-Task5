const Header = ({ title, description }) => {
  return (
    <div className="px-[20px] lg:px-[70px] mb-[56px]">
      <h1 className="text-[#222222] font-[700] text-[39px]">{title}</h1>
      <p className="text-[#22222280] text-[15px] ">{description}</p>
    </div>
  );
};

export default Header;

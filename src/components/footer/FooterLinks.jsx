const FooterLinks = ({ title, arry }) => {
  return (
    <div>
      <h1 className="font-[700] text-[20px] mb-[20px]">{title}</h1>
      <ul>
        {arry.map((item, index) => {
          return (
            <li key={index} className="text-[#222222] mb-[16px] cursor-pointer">
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterLinks;

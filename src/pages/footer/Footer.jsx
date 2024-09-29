import Logo from "../../assets/Logo.jpg";
import FooterLinks from "../../components/footer/FooterLinks";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const links = ["Payment & Tax", "Features", "View Booking", "Support"];
const about = ["About Us", "News", "Pricing", "New Property"];

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[60px] px-[20px] lg:px-[70px] mt-[129px]">
      <div className="max-w-[351.67px]">
        <img src={Logo} alt="logo" />
        <p className="text-[#22222280] mt-[25.92px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
          tempus felis vitae sit est quisque.
        </p>
      </div>
      <FooterLinks title="Service" arry={links} />
      <FooterLinks title="About" arry={about} />
      <div>
        <h1 className="font-[700] text-[20px] mb-[20px]">Our Location</h1>
        <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
        <ul className="flex gap-4 mt-4">
          <li className="bg-[#025595] hover:bg-[#449dd1] w-12 h-12 rounded-full flex justify-center items-center text-white cursor-pointer">
            <FaFacebookF />
          </li>
          <li className="bg-[#025595] hover:bg-[#449dd1]  w-12 h-12 rounded-full flex justify-center items-center text-white cursor-pointer">
            <FaTwitter />
          </li>
          <li className="bg-[#025595] hover:bg-[#449dd1]  w-12 h-12 rounded-full flex justify-center items-center text-white cursor-pointer">
            <FaLinkedinIn />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import Header from "../../components/headerSection/Header";
import imag1 from "../../assets/Image1.jpg";
import imag2 from "../../assets/Card02.png";
import imag3 from "../../assets/Card03.png";
import imag4 from "../../assets/most trending/card1.png";
import imag5 from "../../assets/most trending/card2.png";
import imag6 from "../../assets/most trending/card3.png";
import imag7 from "../../assets/most trending/card4.png";
import imag8 from "../../assets/most trending/card5.png";
import imag9 from "../../assets/most trending/card6.png";
import Styles from "./BestReal.module.css";
import { useState } from "react";

const BestReal = () => {
  const [tap, settap] = useState(1);
  return (
    <div className="mt-[94px]">
      <Header
        title="Best Real Estate Deals"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing eli"
      />
      <div className=" lg:px-[70px]">
        <ul className="flex flex-wrap gap-[50px]">
          <li
            className={`${
              tap === 1 ? Styles.link : ""
            } relative cursor-pointer mb-[56px]`}
            onClick={() => settap(1)}
          >
            Residential Property
          </li>
          <li
            className={`${
              tap === 2 ? Styles.link : ""
            } relative cursor-pointer mb-[56px]`}
            onClick={() => settap(2)}
          >
            Commercial Property
          </li>
          <li
            className={`${
              tap === 3 ? Styles.link : ""
            } relative cursor-pointer mb-[56px]`}
            onClick={() => settap(3)}
          >
            Agriculture Property
          </li>
          <li
            className={`${
              tap === 4 ? Styles.link : ""
            } relative cursor-pointer mb-[56px]`}
            onClick={() => settap(4)}
          >
            Industrial Property
          </li>
        </ul>
        {tap === 1 && (
          <div className="flex gap-[31px] flex-col lg:flex-row flex-wrap">
            <div className="relative">
              <img
                src={imag1}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag2}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag3}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px]  cursor-pointer"
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
          </div>
        )}
        {tap === 2 && (
          <div className="flex gap-[31px] flex-col lg:flex-row flex-wrap">
            <div className="relative">
              <img
                src={imag4}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag5}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag6}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px]  cursor-pointer"
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
          </div>
        )}
        {tap === 4 && (
          <div className="flex gap-[31px] flex-col lg:flex-row flex-wrap">
            <div className="relative">
              <img
                src={imag2}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag6}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag1}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px]  cursor-pointer"
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
          </div>
        )}
        {tap === 3 && (
          <div className="flex gap-[31px] flex-col lg:flex-row flex-wrap">
            <div className="relative">
              <img
                src={imag7}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag8}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px] cursor-pointer "
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
            <div className="relative">
              <img
                src={imag9}
                alt=""
                className="max-w-[380.8px] h-[300px] rounded-[5px]  cursor-pointer"
              />
              <button className="absolute top-[14px] bg-[#22222266] left-[14px] w-[79.02px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                Featured
              </button>
              <button className="absolute top-[14px] bg-[#22222266] left-[100px] w-[30.01px] h-[26px] border-[1px] rounded-[5px] text-white text-[12px]">
                3D
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestReal;

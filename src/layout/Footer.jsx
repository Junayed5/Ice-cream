import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { LuClock9 } from "react-icons/lu";
import { TbClockHour8 } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="h-[755px] w-full bg-[#D37677]">
      <div className="w-fit mx-auto">
        <img src="tittle.png" alt="" />
        <p className="text-white text-xl font-semibold text-center mt-6 mb-3">
          Latest Scoop
        </p>
        <input
          className="bg-[#D37677] border-b w-60 my-5 py-1 "
          placeholder="Email Address"
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="text-white flex justify-center items-center gap-3 ">
        <FaFacebookF className="h-7 w-7" />
        <IoLogoInstagram className="h-7 w-7" />
        <FaWhatsapp className="h-7 w-7" />
      </div>

      <div className="grid grid-cols-3 gap-10 my-14 ml-60">
        <div className="pt ">
          <h3 className="text-xl text-white font-semibold border-gray-300 border-b pb-4">
            SINGAPORE
          </h3>
          <div className="grid grid-cols-2 gap-y-8 gap-x-10 pt-10">
            <div className="text-white">
              <h4 className="text-xl border-b w-fit">Forum Shopping Mall</h4>
              <p className="flex items-center">
                {" "}
                <TbClockHour8 />
                &nbsp; 11AM – 9PM
              </p>
              <p className="flex items-center">
                <ImLocation />
                &nbsp; #B1-27, 583 Orchard Rd, Singapore 238884
              </p>
              <p className="flex items-center">
                <BsFillTelephoneFill /> &nbsp; 90108557
              </p>
            </div>
            <div className="text-white">
              <h4 className="text-xl border-b w-fit">Forum Shopping Mall</h4>
              <p className="flex items-center">
                {" "}
                <TbClockHour8 />
                &nbsp; 11AM – 9PM
              </p>
              <p className="flex items-center">
                <ImLocation />
                &nbsp; #B1-27, 583 Orchard Rd, Singapore 238884
              </p>
              <p className="flex items-center">
                <BsFillTelephoneFill /> &nbsp; 90108557
              </p>
            </div>
            <div className="text-white">
              <h4 className="text-xl border-b w-fit">Forum Shopping Mall</h4>
              <p className="flex items-center">
                {" "}
                <TbClockHour8 />
                &nbsp; 11AM – 9PM
              </p>
              <p className="flex items-center">
                <ImLocation />
                &nbsp; #B1-27, 583 Orchard Rd, Singapore 238884
              </p>
              <p className="flex items-center">
                <BsFillTelephoneFill /> &nbsp; 90108557
              </p>
            </div>
            <div className="text-white">
              <h4 className="text-xl border-b w-fit">Forum Shopping Mall</h4>
              <p className="flex items-center">
                {" "}
                <TbClockHour8 />
                &nbsp; 11AM – 9PM
              </p>
              <p className="flex items-center">
                <ImLocation />
                &nbsp; #B1-27, 583 Orchard Rd, Singapore 238884
              </p>
              <p className="flex items-center">
                <BsFillTelephoneFill /> &nbsp; 90108557
              </p>
            </div>
          </div>
        </div>
        <div className="pt">
          <h3 className="text-xl text-white font-semibold border-gray-300 border-b pb-4">
            MALAYSIA
          </h3>
          <div className="grid grid-rows-2 gap-y-5 pt-10">
            <div className="text-white">
              <h4 className="text-xl border-b w-fit">Forum Shopping Mall</h4>
              <p className="flex items-center">
                {" "}
                <TbClockHour8 />
                &nbsp; 11AM – 9PM
              </p>
              <p className="flex items-center">
                <ImLocation />
                &nbsp; #B1-27, 583 Orchard Rd, Singapore 238884
              </p>
              <p className="flex items-center">
                <BsFillTelephoneFill /> &nbsp; 90108557
              </p>
            </div>
            <div className="text-white">
              <h4 className="text-xl border-b w-fit">Forum Shopping Mall</h4>
              <p className="flex items-center">
                {" "}
                <TbClockHour8 />
                &nbsp; 11AM – 9PM
              </p>
              <p className="flex items-center">
                <ImLocation />
                &nbsp; #B1-27, 583 Orchard Rd, Singapore 238884
              </p>
              <p className="flex items-center">
                <BsFillTelephoneFill /> &nbsp; 90108557
              </p>
            </div>
          </div>
        </div>
        <div className=" border-gray-300 border-l pl-8">
          <h3 className="text-xl text-white font-semibold pb-4 ">INQUIRY</h3>

          <div className="text-white">
            <h4 className="text-xl w-fit">Singapore</h4>
            <div className="py-3 pl-5">
              <p className="flex items-center">+65 91528855</p>
              <p className="flex items-center">+65 91528855</p>
            </div>
          </div>
          <div className="text-white">
            <h4 className="text-xl w-fit">Malaysia</h4>
            <div className="py-3 pl-5">
              <p className="flex items-center">+65 91528855</p>
              <p className="flex items-center">+65 91528855</p>
            </div>
          </div>
          <div className="text-white">
            <h4 className="text-2xl font-bold w-fit">SUPPORT</h4>
            <div className="py-3 pl-5">
              <p className="flex items-center">Terms of Service</p>
              <p className="flex items-center">Privacy Policy</p>
              <p className="flex items-center">Refund Policy</p>
              <p className="flex items-center">Shipping Policy</p>
              <p className="flex items-center">Loyalty Program</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

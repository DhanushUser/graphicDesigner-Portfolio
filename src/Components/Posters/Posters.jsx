import React from "react";
import "./posters.css";
import SocialMedia from "../Social/SocialMedia";
import Thumbnails from "../Thumbnails/Thumbnails";
import Clients from "../Clients/Clients";
import Logo from "../Logo/Logo";

const Posters = () => {
  return (
    <div className="posters mx-[50px]  my-[100px]">
      <div className="p-title flex flex-col justify-center items-center mb-5">
        <span className="lg:text-xl md:text-xl sm:text-lg px-2 text-center rounded-2xl font-extralight bg-[#E5E5E5] text-black">
          posters
        </span>
        <h1 className=" title text-4xl  font-[550] text-[#FCA311]">
          Social Media{" "}
        </h1>
        <hr className="border w-[7vw] my-2" />
      </div>

      <div>
        <SocialMedia />
      </div>

      <div className="p-title flex flex-col justify-center items-center mb-5">
        <span className="lg:text-xl md:text-xl sm:text-lg px-2 text-center rounded-2xl font-extralight bg-[#E5E5E5] text-black">
          designs
        </span>
        <h1 className=" title text-4xl  font-[550] text-[#FCA311]">
          Thumbnails
        </h1>
        <hr className="border w-[7vw] my-2" />
      </div>

      <div>
        <Thumbnails />
      </div>

      <div className="p-title flex flex-col justify-center items-center mb-5">
        <span className="lg:text-xl md:text-xl sm:text-lg px-2 text-center rounded-2xl font-extralight bg-[#E5E5E5] text-black">
          posters
        </span>
        <h1 className=" title text-4xl  font-[550] text-[#FCA311]">
          Client works
        </h1>
        <hr className="border w-[7vw] my-2" />
      </div>

      <div>
        <Clients />
      </div>

      <div className="p-title flex flex-col justify-center items-center mb-5">
        <span className="lg:text-xl md:text-xl sm:text-lg px-2 text-center rounded-2xl font-extralight bg-[#E5E5E5] text-black">
          posters
        </span>
        <h1 className=" title text-4xl  font-[550] text-[#FCA311]">
          Logo's
        </h1>
        <hr className="border w-[7vw] my-2" />
      </div>

      <div>
        <Logo />
      </div>
    </div>
  );
};

export default Posters;

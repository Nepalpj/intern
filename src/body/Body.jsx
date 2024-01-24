import React from "react";
import pic from "../img/pic.png";
import learn from "../img/Learn.png"

const Body = () => {
  return (
    <>
     <div className="flex place-content-center">
     <div className="grid grid-cols-2  mt-10 ">
        <div className="mt-20">
          <span className="w-[640px] text-black text-6xl font-normal font-['Italiana']">We bring 
           <span className="text-pink-500"> terrific <br/> change  </span>   in you.</span>
          <p className="mt-5">
            we are dedicated to help you achive a sense of well <br/> being for your 
            body mind & soul by providing a variety <br/>of healthcare & beauty
            services.
            <div className="flex justify-end">
              <img className="h-24 w-24 justify-end" src={learn} alt="learn" />
            </div>
          </p>

        </div>
        <div className="ml-10">
        <div className="w-[379.46px] h-[426px] relative">
  <div className="w-[379.13px] h-[377.67px] left-[0.32px] top-[48.02px] absolute bg-white rounded-full border border-black" />
  <div className="w-[327.22px] h-[333.67px] left-[26.60px] top-[69.99px] absolute bg-zinc-300 rounded-full" />
  <img className="w-[315.73px] h-[405.65px] left-[35.92px] top-0 absolute rounded-[172.50px]" src={pic} />
  <div className="w-7 h-[27.67px] left-[311.69px] top-[93.59px] absolute bg-gradient-to-b from-neutral-200 to-fuchsia-300 rounded-full" />
</div>
        </div>
      </div>
     </div>
     <div className="flex ml-80">
      <span className="text-3xl font-bold">Why choose Us ?</span>
     </div>
    </>
  );
};

export default Body;

<div className=""></div>;

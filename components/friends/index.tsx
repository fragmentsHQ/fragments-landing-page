import React, { ComponentProps } from "react";
import Wave from "../../public/images/waves.png";
import Wave_md from "../../public/images/waves_md.png";
import Wave_mobile from "../../public/images/waves_mobile.png";
import Image from "next/image";
import Connext from "../../public/images/connext.png";
import CoinShift from "../../public/images/coinshift.png";
import SuperFluid from "../../public/images/superfluid.png";
import { cn } from "@/lib/utils/cn";

const Friends = () => {
  const friends = [
    {
      id: 0,
      name: "Connext",
      image: Connext,
      className: "lg:w-[158.49px] lg:h-[32.53px] w-[220.82px] h-[45.32px]",
    },
    {
      id: 1,
      name: "CoinShift",
      image: CoinShift,
      className: "lg:w-[122.5px] lg:h-[38.76px] w-[170.68px] h-[54px]",
    },
    {
      id: 3,
      name: "SuperFluid",
      image: SuperFluid,
      className: "lg:w-[146.03px] lg:h-[35.99px] w-[203.46px] h-[50.14px]",
    },
  ];
  return (
    <div>
      <h1 className="md:text-[50px] text-[30px] md:leading-[63px] leading-[37.8px] font-extrabold lg:text-center md:text-start text-start px-4 md:px-0">
        Friends on the frontier is already in love with fragments
      </h1>
      <div className="bg-white w-full lg:h-[850px] md:h-[1000px]  mt-10 relative">
        <Image src={Wave} fill alt="wave" className="lg:block hidden" />
        <Image
          src={Wave_md}
          fill
          alt="wave"
          className="lg:hidden md:block hidden"
        />

        <div className="container mx-auto flex  items-center  flex-col lg:flex-row py-10 lg:px-10  justify-between h-full">
          <div className="lg:w-[50%]  w-full  relative z-10 h-full flex flex-col justify-between lg:justify-between md:justify-start">
            <div className="h-[70%] w-full lg:w-[100%] md:w-[70%]">
              <Review />
              <Review />
              <Review className="md:block lg:hidden mb-0" />
            </div>
            <div className="w-full h-[600px] mt-[-100px] relative">
              <Image
                src={Wave_mobile}
                fill
                alt="wave"
                className="lg:hidden md:hidden block"
              />
            </div>
            <div className="relative z-10 flex  lg:mt-0 md:mt-[200px]  md:flex-row flex-col md:space-y-0 lg:justify-start space-y-10 items-center w-full md:space-x-10 justify-center  md:justify-between">
              {friends.map((item, index) => (
                <div className={cn("relative", item.className)} key={index}>
                  <Image src={item.image} alt={item.name} fill />
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 lg:flex items-end h-full hidden w-[50%]">
            <Review className="mb-0 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;

const Review: React.FC<ComponentProps<"div">> = ({ className }) => {
  return (
    <div className={cn("mb-10 lg:px-0 px-10", className)}>
      <p className="font-normal  text-base leading-[25.6px] text-black">
        “Since integrating Autopay into our dApp, managing subscriptions and
        payouts has become a breeze. Our users love the seamless experience, and
        we couldn't be happier with the results”
      </p>
      <div className="mt-3 relative z-20 font-extrabold text-[#626262] leading-[32.76px] text-[26px]">
        Arjun
      </div>
      <p className="mt-1 relative z-20 bg-text-gradient text-transparent bg-clip-text font-normal text-base leading-6">
        Connext
      </p>
    </div>
  );
};

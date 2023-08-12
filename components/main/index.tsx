import MainPageGraphic, { MainPageGraphic2 } from "@/assets/MainPageGraphic";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Main = () => {
  return (
    <div className="lg:h-[86vh] h-full mt-[14vh] md:mt-[14vh] flex lg:flex-row flex-col max-w-[550px] mx-auto md:max-w-full  lg:items-center justify-between lg:space-x-6 space-x-0 w-full">
      <div className="lg:w-[60%] md:w-[80%] mt-12 lg:py-0 py-32 w-full">
        <h1 className="lg:text-[66px] text-center md:text-left text-[52px]  text-white leading-[65.52px] lg:leading-[81.72px] font-bold">
          Start building your Crypto Payment Infra
        </h1>
        <p className="font-semibold mt-10 md:text-left text-center lg:text-[22px] md:text-base lg:leading-[32.76px] md:leading-[20.16px] w-[90%] mx-auto md:mx-0 md:w-[75%] text-white">
          FRAGMENTS is offering an awesome suite of products to build intent
          based transactions and conditional payment solutions across EVM
          chains.
        </p>

        <div className="md:mt-16 mt-14 flex items-center md:flex-row flex-col space-y-4 md:space-y-0 justify-start  md:space-x-4">
          <a
            href={"https://fragments.gitbook.io/intro/"}
            target="_blank"
            className="w-full md:w-auto"
          >
            <button className="border border-1 md:mt-0 mt-6 w-full justify-center font-semibold leading-[22.68px] text-[17px] flex items-center max-w-[90%] mx-auto md:mx-0 md:max-w-fit rounded-[12px] px-6 py-[14px]">
              <span>Read docs</span>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="ml-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 7H17V17"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </a>
          <a
            href="https://calendly.com/timbresociety"
            target="_blank"
            className="w-full md:w-auto"
          >
            <button className="bg-button-bg-gradient md:order-last order-first w-full  font-semibold leading-[22.68px] text-[17px] flex items-center justify-center md:mx-0  max-w-[90%] mx-auto md:max-w-fit rounded-[12px] px-6 py-[14px]">
              <span className="bg-text-gradient text-transparent bg-clip-text">
                Schedule a demo
              </span>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                className="ml-3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                  stroke="url(#paint0_radial_620_1657)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 2V6"
                  stroke="url(#paint1_radial_620_1657)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 2V6"
                  stroke="url(#paint2_radial_620_1657)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 10H21"
                  stroke="url(#paint3_radial_620_1657)"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_620_1657"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.1705 10.8218) rotate(125.895) scale(14.6407 36.5633)"
                  >
                    <stop stopColor="#002366" />
                    <stop offset={1} />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_620_1657"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(16.565 3.51596) rotate(100.256) scale(2.67843 2.46741)"
                  >
                    <stop stopColor="#002366" />
                    <stop offset={1} />
                  </radialGradient>
                  <radialGradient
                    id="paint2_radial_620_1657"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(8.56503 3.51596) rotate(100.256) scale(2.67843 2.46741)"
                  >
                    <stop stopColor="#002366" />
                    <stop offset={1} />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_620_1657"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(13.1705 10.379) rotate(175.61) scale(8.60907 3.45445)"
                  >
                    <stop stopColor="#002366" />
                    <stop offset={1} />
                  </radialGradient>
                </defs>
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="lg:w-[40%] flex items-center md:mt-12  justify-center lg:justify-end lg:pr-10 lg:mx-0 w-full">
        <div className="lg:block hidden">
          <MainPageGraphic />
        </div>
        <div className="md:block lg:hidden hidden">
          <MainPageGraphic2 />
        </div>
        <div className="md:hidden block  lg:hidden w-full">
          <div className="relative h-[260px] z-20  w-full">
            <Image src={"/images/mobile_art.png"} fill alt="Mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { socialLinks } from "../footer";

export default function AutopayMenu({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>{children}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-[313px] origin-top-right rounded-xl bg-text-gradient-gray p-1 focus:outline-none">
            <div className="bg-white p-6 rounded-lg">
              <div>
                <p className="bg-text-fluid-blue bg-clip-text text-transparent font-medium text-[18px] leading-[22px]">
                  Autopay
                </p>
                <div className="h-[2px] w-full bg-[#D3D3D3] my-2"></div>
                <div className="flex items-center text-black justify-between">
                  <a
                    href={"https://app.fragments.money"}
                    target="_blank"
                    className="text-base leading-[20px] font-semibold"
                  >
                    Launch App
                  </a>
                  <a
                    href="https://fragments.gitbook.io/intro/autopay/what-is-autopay"
                    target="_blank"
                  >
                    <div className="flex items-center justify-center text-base leading-[20px] font-semibold">
                      Explore Docs
                      <div className="w-[24px] h-[24px] relative">
                        <Image
                          src={"/icons/arrow_black.svg"}
                          fill
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="mt-8">
                <p className="bg-text-fluid-blue bg-clip-text text-transparent font-medium text-[18px] leading-[22px]">
                  Xstream
                </p>
                <div className="h-[2px] w-full bg-[#D3D3D3] my-2"></div>
                <div className="flex items-center text-black justify-between">
                  <button
                    disabled
                    className="text-base cursor-not-allowed leading-[20px] font-semibold"
                  >
                    Launch App
                  </button>
                  <button disabled>
                    <div className="flex items-center cursor-not-allowed justify-center text-base leading-[20px] font-semibold">
                      Explore Docs
                      <div className="w-[24px] h-[24px] relative">
                        <Image
                          src={"/icons/arrow_black.svg"}
                          fill
                          alt="arrow"
                        />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <a href={"https://calendly.com/timbresociety"} target="_blank">
                <button className="bg-button-bg-gradient  w-full  font-semibold leading-[22.68px] text-[17px] flex items-center justify-center my-8 rounded-[12px] px-6 py-[14px]">
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

              <div className="mb-2 flex items-center justify-center space-x-4">
                {socialLinks.map((link, index) => (
                  <Link
                    href={link.link}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[30px] h-[30px] relative"
                  >
                    <Image
                      src={"/icons" + link.image2}
                      fill
                      alt={link.name}
                      layout="fill"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

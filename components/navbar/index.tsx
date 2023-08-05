"use client";
import { cn } from "@/lib/utils/cn";
import React from "react";
import AutopayMenu from "../menu";

const Navbar = () => {
  return (
    <div className="bg-white fixed z-50 top-0 py-4   md:py-0 md:h-[14vh]  rounded-b-[36px] w-full">
      <div className="container w-full px-4 md:px-10 lg:px-4 flex items-center md:flex-row flex-col h-full space-y-2 pb-4 md:pb-0 md:space-y-0 justify-between">
        <div className="md:hidden w-full inline-flex justify-end  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 cursor-pointer ml-4 text-[#002366]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <h1 className="md:text-[42px] text-[32px] font-bold bg-text-fluid-blue md:bg-text-gradient text-transparent uppercase leading-[52.92px] w-fit bg-clip-text">
          Fragments
        </h1>
        <div className="flex items-center justify-end md:flex-row flex-col space-y-6  md:space-y-0">
          <p
            className={cn(
              "bg-text-gradient md:text-base ibm text-sm font-extralight leading-[20px] text-transparent md:mx-0 mx-auto md:w-[80%] lg:w-[50%]   md:text-right text-center w-[90%] lg:text-right bg-clip-text ml-4 "
            )}
          >
            Cross-chain interoperability made easy with our automation
            middleware
          </p>
          <div className="md:block  hidden">
            <AutopayMenu>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 cursor-pointer ml-4 text-[#002366]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </AutopayMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

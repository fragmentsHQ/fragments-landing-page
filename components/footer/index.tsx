import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterSection = () => {
  return (
    <div className="w-full md:bg-wallpaper bg-cover relative md:py-20 py-10 md:px-10 px-4">
      <Header />
      <div className="h-[60px]" />
      <Features />
      <div className="h-[100px]" />
      <Chat />
      <div className="h-[120px]" />
      <Links />
    </div>
  );
};

export default FooterSection;

const Header = () => {
  return (
    <h1 className="text-[50px] leading-[63px] tracking-[0.01em] font-extrabold lg:w-[50%] w-full mx-auto text-left md:text-center">
      <span className="text-[26px] leading-[32.76px]">
        Unparalleled Experience.
      </span>
      <br />
      <div className="md:w-full w-[100px]">Secure. Efficient. Fast.</div>
    </h1>
  );
};

const Features = () => {
  const data = [
    {
      id: 1,
      image: "/images/feature1.png",
      imageClass: "w-[62px] h-[100px]",
      desc: "Maintain gas balance or enable forward paying gas in any native token or ERC-20 stable coins",
    },
    {
      id: 2,
      image: "/images/feature2.png",
      imageClass: "w-[219.97px] h-[55px]",
      isMiddle: true,
      desc: "Open source, Composable and Trustless infrastructure built by unifying 0x, Gelato and Connext Networks",
    },
    {
      id: 3,
      image: "/images/feature3.png",
      imageClass: "w-[104px] h-[104px]",
      desc: "Holistic overview on all your automated jobs along with their executions on your dashboard",
    },
    {
      id: 4,
      image: "/images/feature4.png",
      imageClass: "w-[150px] h-[110px]",
      desc: "Simplified treasury ops with cross-chain call execution and multicall batching for 1-many transactions",
    },
    {
      id: 5,
      image: "/images/feature5.png",
      imageClass: "w-[102px] h-[102px]",
      isMiddle: true,
      desc: "Conditional(one-time) or recurring automation based on trigger values of time, token pair price or network’s gas price (tigger values can be expanded to any known data point)",
    },
    {
      id: 6,
      image: "/images/feature6.png",
      imageClass: "w-[286px] h-[109px]",
      desc: "Seamless automations on ERC-20s from an EOA, SAFE wallet or directly from your smart contracts",
    },
  ];
  return (
    <div className="md:mt-[40px]">
      <div className="container w-full mx-auto flex flex-wrap items-center justify-center px-4  gap-6">
        {data.map((feature, i) => (
          <Feature key={i} feature={feature} />
        ))}
      </div>
    </div>
  );
};

const Feature = ({
  feature,
}: {
  feature: {
    id: number;
    isMiddle?: boolean;
    imageClass: string;
    image: string;
    desc: string;
  };
}) => {
  return (
    <div
      className={cn(
        "md:h-[300px]  w-[30%] min-w-[300px] flex mt-20 justify-center items-center flex-col",
        !feature.isMiddle ? "md:mt-0" : "md:mt-20"
      )}
    >
      <div className={cn("relative", feature.imageClass)}>
        <Image src={feature.image} alt={feature.id.toString()} fill />
      </div>
      <p className="text-base leading-[20.16px] mt-16 w-[90%] md:w-[90%] lg:w-[75%] mx-auto font-medium text-center">
        {feature.desc}
      </p>
    </div>
  );
};

const Chat = () => {
  return (
    <div className="container w-full lg:w-[80%] rounded-[36px] flex-col md:h-[500px] lg:h-[400px] bg-text-gradient bg-cover py-10 lg:py-0  px-8 mx-auto flex items-start justify-center">
      <div className="lg:w-[90%] md:w-[70%] w-full mx-auto">
        <h1 className="md:text-[40px] text-[30px]  md:leading-[63px] leading-[37.8px] font-extrabold">
          Curious about our bespoke solutions?
          <br />
          Let’s setup a chat.
        </h1>
        <p className="ibm mt-4 md:text-base text-sm leading-[20.8px] font-normal">
          Unleashing the power of intent based transactions across EVM chains.
          Setup a call now to get a bespoke offering for automating your mundane
          payments and transactions using a trustless infrastructure.
        </p>
        <a href="https://calendly.com/timbresociety" target="_blank">
          <button className="bg-button-bg-gradient mt-10 w-full  font-semibold leading-[22.68px] text-[17px] flex items-center justify-center md:mx-0  max-w-[90%] mx-auto md:max-w-fit rounded-[12px] px-6 py-[14px]">
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
  );
};

const Links = () => {
  return (
    <div className="flex items-center container lg:flex-row flex-col px-6 mx-auto justify-between w-full">
      <div className="lg:w-[50%] w-full flex md:justify-end lg:justify-start justify-center h-full">
        <div>
          <p className="md:text-[22px]  text-sm text-left lg:text-left md:text-right leading-[27.72px] text-[#D3D3D3]">
            COMING SOON
          </p>
          <div className="flex items-center justify-start space-x-10 md:mt-6 mt-4">
            <div className="md:w-[200px] w-[137px] md:h-[40px] h-[30px] relative">
              <Image src={"/images" + "/xstream.png"} fill alt={"xstream"} />
            </div>
            <div className="md:w-[150px] w-[106px] md:h-[40px] h-[30px] relative">
              <Image src={"/images" + "/swapx.png"} fill alt={"xstream"} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] w-full flex items-center lg:mt-0 mt-20 md:flex-row flex-col justify-end">
        <div>
          <div className="flex items-center justify-center md:justify-end">
            <Link
              href={"/terms"}
              className="leading-[15.6px] border mr-4 border-[#a5a4a4] border-t-0 border-l-0 border-r-0  underline bg-text-gradient-gray bg-clip-text text-transparent text-[12px] font-normal ibm"
            >
              terms of use
            </Link>
            <p className="bg-text-gradient-gray bg-clip-text text-transparent text-[12px] font-normal ibm">
              © 2023 | fragments
            </p>
          </div>
          <p className="bg-text-gradient-gray mt-2 text-end bg-clip-text text-transparent text-[12px] font-normal ibm">
            © 2023 Fragments Inc. All rights reserved.
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-end space-x-4 md:mt-0 mt-10 md:ml-10">
          {socialLinks.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              target="_blank"
              rel="noreferrer"
              className="w-[30px] h-[30px] relative"
            >
              <Image
                src={"/icons" + link.image}
                fill
                alt={link.name}
                layout="fill"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const socialLinks = [
  {
    name: "twitter",
    link: "https://twitter.com/fragmentsHQ",
    image: "/twitter.svg",
    image2: "/twitter_blue.svg",
  },
  {
    name: "discord",
    link: "https://t.me/fragmentsorg",
    image: "/discord.svg",
    image2: "/discord_blue.svg",
  },
  {
    name: "github",
    link: "https://github.com/fragmentsHQ",
    image: "/github.svg",
    image2: "/github_blue.svg",
  },
  {
    name: "telegram",
    link: "https://www.instagram.com/fragments.money/",
    image: "/telegram.svg",
    image2: "/telegram_blue.svg",
  },
];

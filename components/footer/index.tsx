import React from "react";

const FooterSection = () => {
  return (
    <div className="w-full md:bg-wallpaper bg-cover relative md:py-20 py-10 px-4">
      <Header />
      <div className="h-[60px]" />
      <Features />
      <div className="h-[60px]" />
      <Chat />
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
  return (
    <div className="container w-full mx-auto flex flex-wrap items-center justify-center px-4 gap-4">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <Feature key={i} />
        ))}
    </div>
  );
};

const Feature = () => {
  return <div className="h-[300px] w-[30%] min-w-[300px]  "></div>;
};

const Chat = () => {
  return (
    <div className="container w-full lg:w-[80%] rounded-[36px] flex-col md:h-[500px] lg:h-[400px] bg-text-gradient bg-cover py-10 lg:py-0  px-8 mx-auto flex items-start justify-center">
      <div className="lg:w-[90%] md:w-[70%] w-full mx-auto">
        <h1 className="md:text-[40px] text-[30px]  md:leading-[63px] leading-[37.8px] font-extrabold">
          Want to know more, Let’s setup a chat?
        </h1>
        <p className="ibm mt-4 md:text-base text-sm leading-[20.8px] font-normal">
          Unleashing the power of blockchain and crypto. Join the chat to learn
          about the future of finance and explore the world of digital
          currencies together.
        </p>
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
      </div>
    </div>
  );
};

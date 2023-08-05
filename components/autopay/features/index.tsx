import { cn } from "@/lib/utils/cn";
import ConditionalTriggers from "./ConditionalTrigger";
import CrossChainTokenPayments from "./CrosschainTokenPayments";
import GasPayMethods from "./GasPayMethods";
import MassPayouts from "./MassPayouts";

const features = [
  {
    id: 0,
    title: "Conditional Triggers",
    component: <ConditionalTriggers />,
    desc: "Take control of your transactions like never before. Autopay allows you to set conditional triggers based on time, token pair price, or network's gas price. Seamlessly automate your payments by defining rules that align with your preferences and objectives. Enjoy the freedom of setting triggers that suit your unique needs and let Autopay handle the rest.",
  },
  {
    id: 1,
    title: "Gas Payment Flexibility",
    component: <GasPayMethods />,
    desc: "Autopay understands the importance of flexibility when it comes to gas payments. With Autopay, you have the option to forward pay gas on transactions in your source token, eliminating the need for constant gas management. Alternatively, you can choose to maintain a gas balance within the system, ensuring smooth and uninterrupted transaction execution. The choice is yours.",
  },
  {
    id: 2,
    title: "Cross-Chain and Cross-Token Payments",
    component: <CrossChainTokenPayments />,
    desc: "Experience true interoperability with Autopay. Schedule payments effortlessly from any source chain and source token to any destination chain and destination token. Seamlessly navigate between different chains and tokens without the hassle of manual intervention. Autopay simplifies cross-chain transactions, bringing unparalleled convenience to your payment ecosystem.",
  },
  {
    id: 2,
    title: "Mass Payouts Made Easy",
    component: <MassPayouts />,
    desc: "Need to send out multiple transactions at once? Autopay has you covered. With our one-to-many transaction support, you can effortlessly execute mass payouts with a single click. Streamline your bulk payment processes and save valuable time and effort. Autopay empowers you to scale your payment operations effortlessly, regardless of the size of your transaction volume.",
  },
];

const Features = () => {
  return (
    <div className="space-y-10 mt-20 flex flex-col w-full h-full">
      {features.map((feature, index) => (
        <div key={index} className="bg-[#EFEFEF] p-6 w-full rounded-xl">
          <h1 className="font-bold text-[18px] leading-[22.68px] text-[#1867FD] text-center">
            {feature.title}
          </h1>
          <p
            className={cn(
              "text-sm font-normal md:block hidden  ibm leading-[19px] text-center text-black mt-4 mx-auto w-[90%]"
            )}
          >
            {feature.desc}
          </p>
          {feature.component}
        </div>
      ))}
    </div>
  );
};
export default Features;

import AutoPay from "@/components/autopay";
import FooterSection from "@/components/footer";
import Friends from "@/components/friends";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="h-full  w-full">
      <div className="flex flex-col items-center h-full w-full">
        <Navbar />
      </div>
      <div className="container mx-auto lg:px-4 md:px-10 px-4">
        <Main />
      </div>
      <div className="h-[100px]" />
      <div className="lg:px-4 md:px-10 px-4">
        <AutoPay />
      </div>
      <div className="h-[100px]"></div>
      <Friends />
      <FooterSection />
    </main>
  );
}

import Image from "next/image";
import { Header } from "./containers/header";
import { PhoneSection } from "./containers/phoneSection";
import { Training } from "./containers/training";
import { AboutUs } from "./containers/aboutUs";
import { Cta } from "./containers/cta";
import Blog from "./containers/blog";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-items-center min-h-screen">
      <Header />
      <PhoneSection />
      <Training />
      <AboutUs />
      <Cta />
      <Blog />
    </div>
  );
}

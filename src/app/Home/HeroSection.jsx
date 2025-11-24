import Styles from "./BgImage.module.css";
import { ArrowRight } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="container mx-auto">
      <div className={`${Styles.bgimage}  flex flex-col justify-center items-left p-2 `}>
        <div className="object-center"><p className="text-4xl text-white font-bold">Fresh & Limited Deal</p>
        <div className="flex  bg-lime-500 w-57 rounded-2xl"> 
          <a className="text-3xl text-white flex p-2 " href="" target="_self">
            Shop NOW
          </a>
          <ArrowRight size={60} color="#ecf4ee" className=" p-2"/>
        </div></div>
      </div>
    </div>
  );
};
export default HeroSection;

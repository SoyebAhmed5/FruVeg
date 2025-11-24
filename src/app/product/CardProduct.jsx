import { DiamondPlus } from "lucide-react";
const Card = ({ image, title, current, original }) => {
  return (
    <div className="p-3 rounded-2xl justify-content-center border-2  m-2 bg-amber-400 hover:bg-lime-500 hover:">
      <a href="" className="place-content-center">
        <img src={image} alt="" className="w-64 h-48" />
        <div className="text-center text-lg">{title}</div>
      </a>
      <div className="flex justify-between border-t mt-2">
        <div className="flex  gap-1 font-semibold text-xl ">
          <p>₹{current}</p>
          <p className="line-through">₹{original}</p>
        </div>
        <a className="flex font-semibold rounded-xl p-1 hover:border-1">
          <DiamondPlus size={20} color="#05f509" /><span>ADD</span>
        </a>
      </div>
    </div>
  );
};
export default Card;

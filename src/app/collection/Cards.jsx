import { SquarePlus } from "lucide-react";

const Cards = ({product,weight,cost,image}) => {
  return (
    <div className="p-3 bg-gray-200 rounded-2xl">
      <div>
        <p className="text-xl font-medium">{product}</p>
        <p className="text-lg">{weight}</p>
        <p className="font-bold text-2xl ">{cost}</p>
      </div>
      <div >
        <img src={image} alt="" className="w-64 h-48 object-cover rounded-lg border" />
         <footer className="flex flex-row-reverse">
          <SquarePlus color="#31fb23" size={30} />
        </footer>
      </div>
    </div>
  );
};
export default Cards;

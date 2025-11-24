import { Zap } from "lucide-react";
import Cards_Items from "./Card_Items.jsx";
const Deal = () => {
  const cardsData = [
    {
      Image_Source: "/Tomato_card.jpg",
      Description: "Fresh Farm Tomato",
      Price: "$3.40",
      rating:"3"
    },
    {
      Image_Source: "/Capsicum.jpg",
      Description: "Fresh Capsicum",
      Price: "$2.50",
      rating:"3.5"
    },
    {
      Image_Source: "/Pumpkin.jpg",
      Description: "Fresh Pumpkin",
      Price: "$1.20",
      rating:"4.5"
    },
    {
      Image_Source: "/Cabbage.jpg",
      Description: "Fresh cabbage",
      Price: "$0.80",
      rating:"2.5"
    },
    {
      Image_Source: "/Avocado.jpg",
      Description: "Fresh Avocado",
      Price: "$1.50",
      rating:"4.5"
    },
  ];
  return (
    <div className="container mx-auto m-5">
      <div className="container mx-auto flex gap-3">
        <h1 className="text-2xl font-bold flex"><Zap /> Deals Of The Day</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-3 gap-2">
        {cardsData.map((item, index) => (
          <Cards_Items
            key={index}
            Image_Source={item.Image_Source}
            Description={item.Description}
            Price={item.Price}
            Rate={item.rating}
          />
        ))}
      </div>
    </div>
  );
};
export default Deal;

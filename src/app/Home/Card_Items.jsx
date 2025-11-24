import { Heart } from "lucide-react";
import Link from  "next/link";
import Rating from '@mui/material/Rating';

const Cards_Items = ({ Image_Source, Description, Price, Rate }) => {
  return (
    <div className="border p-2">
      <div>
        <img
          src={Image_Source}
          alt=""
          className="w-64 h-48 object-cover rounded-lg border"
        />
      </div>
      <div className="text-xl">
        <p>{Description}</p>
        <p className="font-bold">{Price}</p>
    
<Rating name="half-rating-read" defaultValue={Rate} precision={0.5} readOnly />
      </div>
      <div className=" flex justify-between border-t pt-2">
        <Heart color="#0ff549" size={40} />
        <Link className="bg-lime-500 p-2 rounded-2xl text-lg" href="#">
          Add to Cart
        </Link>
      </div>
    </div>
  );
};
export default Cards_Items;

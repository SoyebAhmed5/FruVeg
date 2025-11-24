import { Search } from "lucide-react";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import "../globals.css";
import Link from "next/link";

const SearchBar = () => {
  return (
    <div className=" border-2 p-2">
      <div className="flex justify-between gap-2 items-center">
        <a className="bg-hero rounded-2xl" href="/"></a>
        <div className="flex border-2 sm:w-80 p-2 rounded-2xl">
          <input
            type="text"
            placeholder="Search Items Here"
            className="focus:outline-none w-full"
          />
          <Search />
        </div>
        <div className="inline-flex justify-self-center gap-2">
          <Heart strokeWidth={1.75} />
          <ShoppingCart strokeWidth={1.75} />
          <User strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;

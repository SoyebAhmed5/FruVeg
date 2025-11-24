import Link from "next/link";

const Scroll = () => {
  return (
    <div>
      {/* <div className="bg-amber-200 text-xl font-semibold flex justify-evenly "> */}
      <div className="max-w-6xl mx-auto px-4 py-4 bg-black text-white items-center">
          {/* <Link href="#Grocery" className="hover:border-2 hover:p-1 ">Grocery</Link>
          <Link href="#Dairy">Dairy</Link>
          <Link href="#Juices">Juices</Link>
          <Link href="#Drink">Drinks</Link> */}

      <ul className=" md:flex gap-6 md:justify-evenly">
          <li><a href="#Grocery" className="hover:text-green-200 hover:border-2 hover:p-1 font-semibold ">Grocery</a></li>
          <li><a href="#Dairy" className="hover:text-green-200 hover:border-2 hover:p-1 font-semibold">Dairy</a></li>
          <li><a href="#Juices" className="hover:text-green-200 hover:border-2 hover:p-1 font-semibold">Juices</a></li>
          <li><a href="#Drink" className="hover:text-green-200 hover:border-2 hover:p-1 font-semibold">Drinks</a></li>
        </ul>


      </div>
    </div>
  );
};
export default Scroll;

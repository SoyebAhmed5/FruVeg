"use client"; // Needed for useState
import Link from "next/link";
// export default function Navbar() {
//   return (
//     <nav className="text-white p-5">
//       <div className="  items-center bg-black p-4">
//         <div className="grid grid-cols-1 sm:flex sm:justify-evenly sm:gap-6" >
//           <Link
//             href="/"
//             className="hover:bg-stone-800 hover:text-white hover:rounded hover:border ">
//             Home
//           </Link>
//           <Link
//             href="/collection"
//             className="hover:bg-stone-800 hover:text-white hover:rounded hover:border">
//             Collection
//           </Link>
//           <Link
//             href="/Product"
//             className="hover:bg-stone-800 hover:text-white  hover:rounded hover:border">
//             Product
//           </Link>
//           <Link
//             href="/MegaMenu"
//             className="hover:bg-stone-800 hover:text-white hover:rounded hover:border">
//             Mega Menu
//           </Link>
//           <Link
//             href="/Blogs"
//             className="hover:bg-stone-800 hover:text-white  hover:rounded hover:border">
//             Blogs
//           </Link>
//           <Link
//             href="/Seller"
//             className="hover:bg-stone-800 hover:text-white hover:rounded hover:border">
//             Seller
//           </Link>
//           <Link
//             href="/Pages"
//             className="hover:bg-stone-800 hover:text-white hover:rounded hover:border">
//             Pages
//           </Link>
//           <Link
//             href="/BuyNow"
//             className="hover:bg-stone-800 hover:text-white hover:rounded hover:border">
//             Buy Now
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }




import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a className="logo" href="/">
        
        </a>
        

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          <li><a href="/" className="hover:text-green-200 hover:border-2 hover:p-1 ">Home</a></li>
          <li><a href="/collection" className="hover:text-green-200 hover:border-2 hover:p-1">Collection</a></li>
          <li><a href="/product" className="hover:text-green-200 hover:border-2 hover:p-1">Product</a></li>
          <li><a href="/blogs" className="hover:text-green-200 hover:border-2 hover:p-1">Blogs</a></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black px-4 py-4 space-y-2">
          <li><a href="/" className="block hover:text-green-200">Home</a></li>
          <li><a href="/collection" className="block hover:text-green-200">Collection</a></li>
          <li><a href="/product" className="block hover:text-green-200">Product</a></li>
          <li><a href="/blogs" className="block hover:text-green-200">Blogs</a></li>
        </ul>
      )}
    </header>
  );
}

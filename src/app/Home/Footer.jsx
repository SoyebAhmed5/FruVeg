import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { AtSign } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-3  text-2xl font-bold flex-row">
      
      <div className="  grid grid-cols-1 items-center sm:flex sm:justify-evenly">
        <div>
          <h1 className="text-orange-500">My Account</h1>
          <ul className="text-base m-2">
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Juices</li>
          </ul>
        </div>
        <div>
          <h1 className="text-orange-500">Why Choose Us</h1>

          <ul className="text-base m-2">
            <li>Shipping</li>
            <li>Gallery</li>
            <li>Secure Shipping</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="text-orange-500">Store Information</h1>
          <ul className="text-base list-none">
            <li className="flex m-2">
              <MapPin color="#ff9d14" />
               FruVeg Store, New Delhi
            </li>
            <li className="flex m-2">
               <Phone color="#ff9d14" />
              +91 467417743
            </li>
            <li className="flex m-2">
              <AtSign color="#ff9d14" />
              Email Us: fruveg@inomart.com
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
        <p>&copy; Soyeb Ahmed | All Rights Reserved | FruVeg</p>
      </div>
    </footer>
  );
};
export default Footer;

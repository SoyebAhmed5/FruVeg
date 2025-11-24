import { Bus } from "lucide-react";
import { ClockPlus } from "lucide-react";
import { Megaphone } from "lucide-react";
import { IdCard } from "lucide-react";

const Herogrid = () => {
  return (
    <div className="container mx-auto">
      <div className="grid  grid-cols-1 m-4 sm:m-2 sm:grid-cols-4 gap-4 text-center mt-4">
        <div className="">
          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <Bus size={60} color="#36db33" />
            <div>
              <div className="text-xl font-medium text-black dark:text-white">
                Free Shipping
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Free shipping on all orders over $50
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <ClockPlus size={60} color="#36db33" />
            <div>
              <div className="text-xl font-medium text-black dark:text-white">
                24/7 Support
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We are here to help you anytime
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <Megaphone size={60} color="#36db33" />
            <div>
              <div className="text-xl font-medium text-black dark:text-white">
                Special Offers
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Get the best deals and discounts
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <IdCard size={60} color="#36db33" />
            <div>
              <div className="text-xl font-medium text-black dark:text-white">
                online Payment
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Secure and easy online payment options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Herogrid;

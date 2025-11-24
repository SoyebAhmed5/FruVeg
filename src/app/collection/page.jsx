import Header from "./Header";
import Grocery from "./Grocery";
import NavBar from "../Home/NavBar";
import Dairy from "./DairyProduct"
import Juice from "./Juice"
import Footer from "../Home/Footer";
import Scroll from "./Scroll";
import Drink from "./Drink"

function Collection() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
    <Scroll></Scroll>

      <Grocery></Grocery>
      <Dairy></Dairy>
      <Juice></Juice>
      <Drink></Drink>
      <Footer></Footer>
    </>
  );
}
export default Collection;

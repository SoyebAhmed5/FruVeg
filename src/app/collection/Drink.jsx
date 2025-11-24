
import Cards from "./Cards";
const Drink = () => {
  const productData = [
    {
      product: "Fanta",
      cost: "$5.40",
      weight: "1L",
      image: "/Fanta.jpg",
    },
    {
      product: "String",
      cost: "$6.2",
      weight: "1L",
      image: "/string.jpg",
    },
    {
      product: "Sprite",
      cost: "$4.2",
      weight: "1L",
      image: "/sprite.jpg",
    },
    {
      product: "7 Up",
      cost: "$7.0",
      weight: "1L",
      image: "/7up.jpg",
    },
  ];
  return (
    <div id="Drink">
      <h1 className="font-semibold">Soft Drinks</h1>
      <div className="grid grid-cols-2 m-3 sm:grid-cols-4 gap-3">
        {productData.map((item, index) => (
          <Cards
            key={index}
            product={item.product}
            cost={item.cost}
            weight={item.weight}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Drink;

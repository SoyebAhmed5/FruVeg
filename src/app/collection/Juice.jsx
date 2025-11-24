import Cards from "./Cards";
const Juice = () => {
  const productData = [
    {
      product: "Fresh Mango Juice",
      cost: "$5.40",
      weight: "1kg",
      image: "/MangoJ.jpg",
    },
    {
      product: "Fresh Orange Juice",
      cost: "$6.2",
      weight: "1kg",
      image: "/orangeJ.jpg",
    },
    {
      product: "Fresh Watermelon Juice",
      cost: "$4.2",
      weight: "1kg",
      image: "/WatermelonJ.jpg",
    },
    {
      product: "Fresh Mixed Juice",
      cost: "$7.0",
      weight: "1kg",
      image: "/mixedJ.jpg",
    },
  ];
  return (
    <div id="Juices">
      <h1 className="font-semibold">Juices</h1>
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
export default Juice;

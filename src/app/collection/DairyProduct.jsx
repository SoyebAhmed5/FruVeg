import Cards from "./Cards";
const Dairy = () => {
  const productData = [
    {
      product: "Butter",
      cost: "$8.40",
      weight: "1kg",
      image: "/butter.jpg",
    },
    {
      product: "Yogurt",
      cost: "$6.2",
      weight: "1kg",
      image: "/yogurt.jpg",
    },
    {
      product: "Milk",
      cost: "$4.2",
      weight: "1kg",
      image: "/milk.jpg",
    },
    {
      product: "Cheese",
      cost: "$7.0",
      weight: "1kg",
      image: "/cheese.jpg",
    },
  ];
  return (
    <div id="Dairy">
      <h1 className="font-semibold">Dairy Products</h1>
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
export default Dairy;

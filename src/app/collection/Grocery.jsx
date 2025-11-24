import Cards from "./Cards";
const Grocery = () => {
  const productData = [
    {
      product: "Fresh Lemon",
      cost: "$5.40",
      weight: "1kg",
      image: "/lemon.jpg",
    },
    {
      product: "Fresh Orange",
      cost: "$6.2",
      weight: "1kg",
      image: "/orange.jpg",
    },
    {
      product: "Fresh Onion",
      cost: "$4.2",
      weight: "1kg",
      image: "/onion.jpg",
    },
    {
      product: "Fresh Mango",
      cost: "$7.0",
      weight: "1kg",
      image: "/mango.jpg",
    },
    {
      product: "Fresh Strawberry",
      cost: "$4.2",
      weight: "1kg",
      image: "/strawberry.jpg",
    },
    {
      product: "Fresh Apple",
      cost: "$4.2",
      weight: "1kg",
      image: "/apple.jpg",
    },
    {
      product: "Fresh Corn",
      cost: "$4.2",
      weight: "1kg",
      image: "/corn.jpg",
    },
    {
      product: "Fresh Pineapple",
      cost: "$4.2",
      weight: "1kg",
      image: "/pineapple.jpg",
    },
  ];
  return (
    <div id="Grocery">
      <h1 className="font-semibold">Grocery & Staples</h1>
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
export default Grocery;

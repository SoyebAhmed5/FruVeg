import Card from "./CardProduct";
const Items = () => {
  const product = [
    {
      image: "/yogaBar.jpg",
      title: "Yoga Bar Muesli",
      current: "199",
      original: "399",
    },
    {
      image: "/wheat.jpg",
      title: "Organic Whole Wheat",
      current: "299",
      original: "400",
    },
    {
      image: "/ghee.jpg",
      title: "Haribole Organic Ghee",
      current: "1672",
      original: "1800",
    },
    {
      image: "/bread.jpg",
      title: "Fiorenza Bread",
      current: "50",
      original: "99",
    },
    {
      image: "/avocado2.jpg",
      title: "Hass Avocado",
      current: "399",
      original: "499",
    },
  ];
  const Top = [
    {
      image: "/Keggs.jpg",
      title: "Keggs organic eggs",
      current: "99",
      original: "149",
    },
    {
      image: "/mandarin.jpg",
      title: "Mandarin Oranges",
      current: "399",
      original: "450",
    },
    {
      image: "/berries.jpg",
      title: "Imported Blue Berries",
      current: "449",
      original: "540",
    },
    {
      image: "/basil.jpg",
      title: "Italian Basil",
      current: "79",
      original: "100",
    },
    {
      image: "/spinach.jpg",
      title: "Baby Spinach",
      current: "109",
      original: "149",
    },
  ];
  const Thai = [
    {
      image: "/thai.jpg",
      title: "Real Thai Glass noodle",
      current: "310",
      original: "350",
    },
    {
      image: "/curry.jpg",
      title:"Thai Curry",
      current:"250"
      ,original:"449"
    },
    {
      image: "/sause.jpg",
      title:"Thai Ginger Sauce",
      current:"299"
      ,original:"349"
    },
    {
      image: "/coconut.jpg",
      title:"Thai Coconut Milk",
      current:"149"
      ,original:"229"
    },
    {
      image: "/rice.jpg",
      title:"Blue Dragon Rice",
      current:"549"
      ,original:"749"
    },
  ];
  return (
    <div>
      <h3 className="text-3xl font-semibold m-3">Curated Deal</h3>
      <div className="grid grid-cols-1 m-5 sm:grid-cols-5 mid:grid-cols-4 gap-2 ">
        {product.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            current={item.current}
            original={item.original}
          />
        ))}
      </div>
      <h3 className="text-3xl font-semibold m-3">Top Seller</h3>
      <div className="grid grid-cols-1 m-5 sm:grid-cols-5 gap-2 ">
        {Top.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            current={item.current}
            original={item.original}
          />
        ))}
      </div>
      <h3 className="text-3xl font-semibold m-3">Thai</h3>
      <div className="grid grid-cols-1 m-5 sm:grid-cols-5 gap-2 ">
        {Thai.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            current={item.current}
            original={item.original}
          />
        ))}
      </div>
    </div>
  );
};
export default Items;

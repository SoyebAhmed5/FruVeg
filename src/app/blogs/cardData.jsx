import Card from "./Card";
const Data = () => {
  const product = [
    {
      image: "/Aloo_gobi.jpg",
      heading: "Aloo Gobi",
      description:
        "Aloo gobhi, aloo gobi or alu gobhi is a vegetarian dish from the Indian subcontinent made with potatoes (aloo), cauliflower (gobhi), and Indian spices. It is popular in Indian cuisine. It is yellowish in color due to the use of turmeric, and occasionally contains black cumin and curry leaves.",
      content: "https://en.wikipedia.org/wiki/Aloo_gobhi",
    },
    {
      image: "/Aloo_Tikki.jpg",
      heading: "Aloo Tikki",
      description:
        "Aloo tikki, also known as aloo ki tikkia, aloo ki tikki or alu tikki, is a vegetarian snack originating from the Indian subcontinent. In Indian, Pakistani, and Bangladeshi preparation, it is made of boiled potatoes, peas, and various Indian spices. Aloo means potato in Hindi-Urdu",
      content: "https://en.wikipedia.org/wiki/Aloo_tikki",
    },
    {
      image: "/Aloo_Mattar.jpg",
      heading: "Aloo Mattar",
      description:
        "Aloo mutter is a North Indian dish from the Indian subcontinent which is made from potatoes (aloo) and peas (mattar) in a mildly spiced creamy tomato-based gravy. It is a vegetarian dish. The gravy base is generally cooked with garlic, ginger, onion, tomatoes, cilantro (coriander), cumin seeds",
      content: "https://en.wikipedia.org/wiki/Aloo_Mattar",
    },
    {
      image: "/Aloo_Kulcha.jpg",
      heading: "Aloo Kulcha",
      description:
        "Aloo kulcha is a popular Indian flatbread, specifically a type of kulcha, that is stuffed with a spiced potato mixture. It's often referred to as Amritsari aloo kulcha due to its origin in Amritsar, Punjab. The bread is typically made from leavened dough, similar to naan, and the potato filling is seasoned . ",
      content: "https://en.wikipedia.org/wiki/Aloo_Kulcha",
    },

  ];
  const italian=[{
      image: "/Italian1.jpg",
      heading: "Chicken Vesuvio",
      description:
        "For this essential Italian American dish, created at the Vesuvio restaurant in Chicago, crispy bone-in chicken thighs, peas, and potatoes are braised in a lemony garlic-wine sauce. Here, F&W recipe developer Craig Ruff freshens up the standby with bright herbs like oregano and thyme.",
      content: "https://en.wikipedia.org/wiki/Chicken_Vesuvio",
    },
    {
      image: "/Italian2.jpg",
      heading: "Penne All’Arrabbiata",
      description:
        "Arrabbiata sauce, known in Italian as arrabbiata, is a spicy sauce made with tomatoes, garlic, peperoncino, parsley, and extra virgin olive oil. The sauce originates from the Lazio region of Italy, and particularly from the city of Rome.",
      content: "https://en.wikipedia.org/wiki/Arrabbiata_sauce",
    },
    {
      image: "/Italian3.jpg",
      heading: "Porchetta",
      description:
        "Porchetta (Italian: [porˈketta]) is a savory, fatty, and moist boneless pork roast of Italian culinary tradition. The carcass is deboned and spitted or roasted traditionally over wood for at least eight hours, fat and skin still on. In some traditions, porchetta is stuffed with liver and wild fennel, although many versions do not involve stuffing.",
      content: "https://en.wikipedia.org/wiki/Porchetta",
    },
    {
      image: "/Italian4.jpg",
      heading: "Braciole",
      description:
        "Braciole is an Italian-style roulade, a rolled and stuffed meat that's a staple at Italian family gatherings. For this cozy version, fill rolled flank steaks with prosciutto, panko, pine nuts, and a blend of Parmesan and pecorino cheeses, then bake in a garlicky tomato sauce.although many versions do not involve stuffing.",
      content: "https://en.wikipedia.org/wiki/Braciole",
    },
    
]

  return (
    <div>
      <h1>Indian Cuisine</h1>
      <div className="grid grid-cols-1 m-3 sm:grid-cols-4 gap-2">
        {product.map((items, index) => (
          <Card
            key={index}
            image={items.image}
            heading={items.heading}
            description={items.description}
            content={items.content}
          />
        ))}
      </div>
      <h1>Italian Cuisine</h1>
       <div className="grid grid-cols-1 m-3 sm:grid-cols-4 gap-2">
        {italian.map((items, index) => (
          <Card
            key={index}
            image={items.image}
            heading={items.heading}
            description={items.description}
            content={items.content}
          />
        ))}
      </div>

    </div>
  );
};
export default Data;

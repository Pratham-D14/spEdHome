// components/CardsGrid.jsx
import Card from "./Card";

const clients = [
  {
    name: "Richard Sanchez",
    stars: 5,
    description:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro libero incidunt reprehenderit, aperiam accusantiumae.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Pedro Fernandes",
    stars: 5,
    description:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro libero incidunt reprehenderit, aperiam accusantiumae.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Samira hadid",
    stars: 3,
    description:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro libero incidunt reprehenderit, aperiam accusantiumae.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Shawn Garcia",
    stars: 5,
    description:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro libero incidunt reprehenderit, aperiam accusantiumae.",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    name: "Kriye Petrakis",
    stars: 5,
    description:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro libero incidunt reprehenderit, aperiam accusantiumae.",
    image: "https://i.pravatar.cc/100?img=5",
  },
  {
    name: "Daniel Gallego",
    stars: 4,
    description:
      "rem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem porro libero incidunt reprehenderit, aperiam accusantiumae.",
    image: "https://i.pravatar.cc/100?img=6",
  },
];

export default function CardsGrid() {
  return (
    <div className="flex mt-30 flex-wrap justify-center gap-20 p-20 bg-gray-50">
      {clients.map((client, index) => (
        <Card
          key={index}
          name={client.name}
          stars={client.stars}
          description={client.description}
          image={client.image}
        />
      ))}
    </div>
  );
}

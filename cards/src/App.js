import React from "react";

const cardData = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the First Card.",
    image: "/traveller1.jpg",
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the Second Card.",
    image: "/img3.jpg",
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the Third Card.",
    image: "/img4.jpg",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center bg-gray-400 mb-10">CARD LIST</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-gray-500 rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <p className="text-black">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

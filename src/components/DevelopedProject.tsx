import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./shared/Card";
import Circle from "./Circle";
const ourProducts = [
  {
    id: 1,
    title: "Swoop News",
    image: "d1.png",
  },
  {
    id: 2,
    title: "Telefood",
    image: "d2.png",
  },
  {
    id: 3,
    title: "সহজ কুরআন শিক্ষা",
    image: "d3.png",
  },
  {
    id: 4,
    title: "Sleeptot-Baby White Noise",
    image: "d4.png",
  },
  {
    id: 5,
    title: "SBI General Secure",
    image: "d5.png",
  },
  {
    id: 6,
    title: "Cinebaz",
    image: "d6.png",
  },
];
const DevelopedProject = () => {
  return (
    <div className="relative container mx-auto mt-20">
      <SectionTitle
        title="Our Developed Products"
        highlight="Developed"
        highlightClass="text-[#FA8370]"
      />
      <div className="flex flex-wrap gap-4 justify-center items-center relative z-50">
        {ourProducts.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            variant="product"
          />
        ))}
      </div>
      <Circle className="absolute h-[1000px] w-[1000px] opacity-30 top-0 right-0 transform translate-x-50 -translate-y-60  z-0" />
    </div>
  );
};

export default DevelopedProject;

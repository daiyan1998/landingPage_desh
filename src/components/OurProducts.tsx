import SectionTitle from "./SectionTitle";
import Card from "./shared/Card";

const softwareSolutions = [
  {
    id: 1,
    title: "Gym Management System",
    image: "7.png",
  },
  {
    id: 2,
    title: "Transpiration Tracker",
    image: "8.png",
  },
  {
    id: 3,
    title: "Parcel Delivery App",
    image: "9.png",
  },
  {
    id: 4,
    title: "School Management System",
    image: "10.png",
  },
  {
    id: 5,
    title: "Inventory Management System",
    image: "11.png",
  },
  {
    id: 6,
    title: "Logistics Management System",
    image: "12.png",
  },
];
const OurProducts = () => {
  return (
    <div className="container mx-auto mt-20 relative z-50">
      <SectionTitle
        title="Our Products"
        subtitle="We offer a wide range of products to help you succeed"
        highlight="Products"
        highlightClass="text-[#FA8370]"
      />
      <div className="flex flex-wrap gap-4 justify-center items-center ">
        {softwareSolutions.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.image}
            variant="product"
          />
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

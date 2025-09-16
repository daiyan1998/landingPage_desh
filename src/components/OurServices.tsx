import { AnimateInView } from "./AnimatedList";
import SectionTitle from "./SectionTitle";
import Card from "./shared/Card";

const services = [
  {
    id: 1,
    title: "Mobile App Development",
    image: "1.png",
    reverse: true,
  },
  {
    id: 2,
    title: "UI/UX Design",
    image: "2.png",
    reverse: false,
  },
  {
    id: 3,
    title: "Software Development",
    image: "3.png",
    reverse: true,
  },
  {
    id: 4,
    title: "Digital Marketing",
    image: "4.png",
    reverse: false,
  },
  {
    id: 5,
    title: "Web Development",
    image: "5.png",
    reverse: true,
  },
  {
    id: 6,
    title: "Software Quality Assurance",
    image: "6.png",
    reverse: false,
  },
];

const OurServices = () => {
  return (
    <div className="pt-8">
      <SectionTitle
        title="Our Service"
        subtitle="We offer a wide range of services to help you succeed"
        highlight="Service"
        highlightClass="text-[#FA8370]"
      />
      <AnimateInView className="container mx-auto flex flex-wrap gap-4 justify-center">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            image={service.image}
            reverse={service.reverse}
            variant="service"
          />
        ))}
      </AnimateInView>
    </div>
  );
};

export default OurServices;

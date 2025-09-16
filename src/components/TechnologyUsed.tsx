import SectionTitle from "./SectionTitle";

const TechnologyUsed = () => {
  return (
    <section className="container mx-auto my-20">
      <SectionTitle
        title="Technology We Use"
        highlight="Technology"
        highlightClass="text-[#FA8370]"
      />
      <div className="grid md:grid-cols-6 grid-cols-3 justify-items-center">
        <img src="t1.png" alt="" />
        <img src="t2.png" alt="" />
        <img src="t3.png" alt="" />
        <img src="t4.png" alt="" />
        <img src="t5.png" alt="" />
        <img src="t6.png" alt="" />
      </div>
    </section>
  );
};

export default TechnologyUsed;

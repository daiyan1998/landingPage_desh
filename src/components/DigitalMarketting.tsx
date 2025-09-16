import React from "react";
import SectionTitle from "./SectionTitle";

const DigitalMarketting = () => {
  return (
    <section className="py-10">
      <SectionTitle
        title="Digital Marketting"
        subtitle="We offer a wide range of services to help you succeed"
        highlight="Marketting"
        highlightClass="text-[#FA8370]"
      />
      <div className="grid justify-items-center">
        <img src="digital.png" alt="" />
      </div>
    </section>
  );
};

export default DigitalMarketting;

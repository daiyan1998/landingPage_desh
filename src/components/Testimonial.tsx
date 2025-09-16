import React from "react";
import Circle from "./Circle";
const logos = [
  {
    src: "w1.png",
    alt: "Social Donut",
    text: "SOCIAL DONUT",
  },
  {
    src: "w2.png",
    alt: "ESBO Ltd",
  },
  {
    src: "w3.png",
    alt: "Tab Scanner",
  },
  {
    src: "w4.png",
    alt: "Mirai",
    text: "ミライ菜園",
  },
  {
    src: "w5.png",
    alt: "World Class",
  },
  {
    src: "w6.png",
    alt: "Mission Labs",
    text: "mission labs.",
  },
];
const Testimonial = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Testimonial Card */}
      <div className="relative z-10 flex items-center justify-center py-20 px-4">
        <div className="max-w-md bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
          <div className="mb-6">
            <img src="w2.png" alt="ESBO Ltd Logo" className="mx-auto h-10" />
          </div>

          <p className="text-gray-600 leading-relaxed mb-8">
            DeshIT-BD's professionalism and expertise shone throughout the app
            development process, delivering a high-quality app within the agreed
            time frame and budget. Their exceptional post-launch support ensures
            a seamless user experience.
          </p>

          <div className="text-center">
            <p className="text-gray-500 font-medium">CEO</p>
            <p className="font-semibold text-gray-800">ESBO ltd</p>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="relative z-10 flex flex-col items-center py-16 px-4">
        <div className="text-center mb-8">
          <h3 className="text-sm font-semibold text-[#FA7370] uppercase tracking-wide">
            Clients
          </h3>
          <h2 className="text-2xl md:text-3xl font-bold text-[#FA7370] mt-2">
            Who We Work With
          </h2>
        </div>

        <ClientLogos />
      </div>
      <Circle className="absolute top-0 right-0 opacity-20 transform translate-x-0 -translate-y-50 z-10" />
    </div>
  );
};

function ClientLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-12 md:gap-20">
      {logos.map((logo, i) => (
        <div key={i} className="flex items-center space-x-2">
          <img src={logo.src} alt={logo.alt} className="w-20" />
          {logo.text && (
            <span className="text-sm font-medium text-gray-700">
              {logo.text}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Testimonial;

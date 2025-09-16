import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <div className="flex flex-col gap-2 bg-gradient-to-l from-[#FA7470] to-[#FA9370] text-white text-center md:py-20 py-10 md:mb-20 mb-10">
      <div className="text-3xl font-bold">Say Hello</div>
      <div className="flex gap-2 justify-center">
        <Phone className="w-6 h-6" />
        +8801813320587
      </div>
      <div className="flex gap-2 justify-center">
        <Mail className="w-6 h-6" />
        info@deshit-bd.com
      </div>
      <div>
        <button className="text-[#FA7470] bg-white py-2 px-4  rounded-3xl">
          Free Consultation
        </button>
      </div>
    </div>
  );
};

export default CTA;

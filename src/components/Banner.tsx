import Circle from "./Circle";
import * as motion from "motion/react-client";

const Banner = () => {
  return (
    <div className=" bg-[#FA7370] relative z-10    pt-24 px-5">
      <div className="container mx-auto flex md:flex-row flex-col justify-center gap-32 z-30 relative">
        <div className="flex flex-col justify-center">
          <h1 className="font-poppins font-bold md:text-[3.75rem] text-[2rem]   text-white">
            Outstanding Business
          </h1>
          <motion.h2
            animate={{ opacity: [1, 0, 1], y: [0, -15, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
              times: [0, 0.5, 1],
            }}
            className="font-poppins font-normal md:text-[3.75rem] text-[2rem]  text-white mb-4"
          >
            Needs Better Apps
          </motion.h2>
          <div className="text-[18px] text-white mb-4">
            We build impactful Apps
          </div>
          <div>
            <button className="border-2 border-white text-white rounded-4xl p-2">
              Contact us
            </button>
          </div>
        </div>
        {/* mobile view */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="md:flex justify-center items-center  hidden"
        >
          <img
            src="mobile.png"
            alt=""
            className="w-[400px] h-[720px] relative z-10"
          />
        </motion.div>
      </div>
      {/* style */}
      <div className="custom-shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Circle className="absolute -top-100 -left-30 z-0" />
    </div>
  );
};

export default Banner;

import Circle from "./Circle";

const Banner = () => {
  return (
    <div className=" bg-[#FA7370] relative z-10 h-screen pt-24 px-5">
      <div className="container mx-auto flex md:flex-row flex-col justify-center gap-32 z-30 relative">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="font-poppins font-bold md:text-[3.75rem] text-[2rem]  tracking-[0] text-white">
            Outstanding Business
          </h1>
          <h2 className="font-poppins font-normal md:text-[3.75rem] text-[2rem]  tracking-[0] text-white">
            Needs Better Apps
          </h2>
          <div className="text-[18px] text-white">We build impactful Apps</div>
          <div>
            <button className="border-2 border-white text-white rounded-4xl p-2">
              Contact us
            </button>
          </div>
        </div>
        {/* mobile view */}
        <div className="md:flex justify-center items-center md:block hidden">
          <img
            src="mobile.png"
            alt=""
            className="w-[400px] h-[720px] relative z-10"
          />
        </div>
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

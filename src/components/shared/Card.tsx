const Card = ({
  key,
  title,
  image,
  reverse = false,
  variant = "product",
}: {
  key: number;
  title: string;
  image: string;
  reverse?: boolean;
  variant?: "product" | "service";
}) => {
  return (
    <>
      {/* service */}
      {variant === "service" && (
        <div className="w-[420px]" key={key}>
          <div
            className={` relative flex ${
              reverse ? "flex-row-reverse" : ""
            } w-[420px] h-[250px] bg-[#353F66] `}
          >
            <div
              className={` bg-[#FEE6E2] w-2/4 h-full clip-right ${
                reverse ? "transform scale-x-[-1]" : ""
              }  `}
            ></div>
            <div className="absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center ">
              <img src={image} alt="" className="h-[193px]" />
            </div>
          </div>
          <div className="bg-[#020F40] text-white text-center text-[28px] p-4">
            {title}
          </div>
        </div>
      )}

      {/* product */}
      {variant === "product" && (
        <div
          className="w-[420px] h-[250px\ flex flex-col items-center justify-center"
          key={key}
        >
          <div className="flex justify-center items-center ">
            <img src={image} alt="" className="" />
          </div>
          <div className="w-2/3 bg-white  text-center  p-4 shadow-2xl transform translate-y-[-50%] rounded-2xl">
            {title}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

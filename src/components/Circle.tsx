const Circle = ({
  className,
}: {
  className?: string;
  innerColor?: string;
  outerColor?: string;
}) => {
  return (
    <div
      className={` w-[700px] h-[700px] rounded-full border-[70px] border-[#F58877] flex justify-center items-center ${className} md:block hidden`}
    ></div>
  );
};

export default Circle;

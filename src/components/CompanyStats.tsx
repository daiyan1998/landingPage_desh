import Circle from "./Circle";

const statsData = [
  {
    id: 1,
    value: "7+",
    description: "Years Experience in App Development",
    icon: "i1.png",
  },
  {
    id: 2,
    value: "30+",
    description: "Mobile Apps Developed",
    icon: "i2.png",
  },
  {
    id: 3,
    value: "25+",
    description: "Websites Developed",
    icon: "i3.png",
  },
];

const CompanyStats = () => {
  return (
    <div className="relative container mx-auto grid md:grid-cols-2 grid-cols-1 gap-5 pt-40 px-5">
      <div className="">
        <h1 className="text-3xl font-bold mb-5">DeshIT-Bd</h1>
        <p>
          Started its journey with the determination of enabling organizations
          to leverage technology for betterment. Our priority is to deliver
          impact solutions with superior user experience. We are highly designed
          focused and practice SCRUM to meet clients requirements and deliver
          solutions in time and within budget.a
        </p>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="w[200px] h-[222px] flex flex-col gap-2 text-center shadow-lg p-5"
          >
            <div className="flex justify-center">
              <img src={stat.icon} alt="" />
            </div>
            <h2 className="text-2xl">{stat.value}</h2>
            <p className="text-[#A0A0A0] ">{stat.description}</p>
          </div>
        ))}
      </div>
      {/* style */}
      <Circle className="absolute top-0 left-0 opacity-20 transform -translate-x-0 -translate-y-2/3 z-10" />
    </div>
  );
};

export default CompanyStats;

const SectionTitle = ({
  title,
  subtitle,
  highlight = [],
  highlightClass = "text-red-500",
  className = "",
}: {
  title: string;
  subtitle?: string;
  highlight?: string | string[];
  highlightClass?: string;
  className?: string;
}) => {
  // Normalize highlight into an array
  const highlights = Array.isArray(highlight) ? highlight : [highlight];

  return (
    <div className={`text-center ${className} mb-10`}>
      {/* Title */}
      <h2 className="text-4xl font-bold">
        {title.split(" ").map((word, index) => {
          const isHighlighted = highlights.includes(
            word.replace(/[^a-zA-Z]/g, "")
          );
          return (
            <span key={index} className={isHighlighted ? highlightClass : ""}>
              {word}{" "}
            </span>
          );
        })}
      </h2>

      {/* Subtitle */}
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

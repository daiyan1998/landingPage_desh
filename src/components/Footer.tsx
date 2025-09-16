const footerData = [
  {
    title: "Links",
    type: "list",
    items: [
      { label: "Company", href: "#company" },
      { label: "Products", href: "#products" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Training",
    type: "list",
    items: [
      { label: "Flutter", href: "#flutter" },
      { label: "NodeJS", href: "#nodejs" },
      { label: "Laravel", href: "#laravel" },
    ],
  },
  {
    title: "Our Address",
    type: "text",
    content: "D/36, Block-E Lalmatia, Dhaka\n1207, Bangladesh",
    social: [
      { href: "https://facebook.com", label: "Facebook" },
      { href: "https://linkedin.com", label: "LinkedIn" },
    ],
  },
  {
    title: "Get In Touch",
    type: "form",
  },
];
const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="grid md:grid-cols-4 grid-cols-1 md:justify-items-center gap-10 border-t-[1px] border-[#b3b1b1] py-4 px-10">
        {footerData.map((section, i) => (
          <div key={i} className="space-y-2">
            <h3 className="font-semibold">{section.title}</h3>

            {section.type === "list" && (
              <ul className="space-y-1">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {section.type === "text" && (
              <>
                <p className="whitespace-pre-line">{section.content}</p>
                <div className="flex gap-2">
                  {section.social.map((s, idx) => (
                    <a key={idx} href={s.href} aria-label={s.label}>
                      <div className="size-5 bg-gray-400 rounded-full"></div>
                    </a>
                  ))}
                </div>
              </>
            )}

            {section.type === "form" && (
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  aria-label="Enter your email"
                  className="border border-gray-300 p-1 rounded"
                />
                <button
                  type="submit"
                  className="px-3 py-1 bg-[#FA7470] text-white rounded"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-10 text-gray-500">
        <p>
          &copy; 2025 All Rights Reserved Design by{" "}
          <a href="#company" className="text-orange-400">
            DeshIT-BD
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

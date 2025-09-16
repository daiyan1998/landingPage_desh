import { Menu } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Company", href: "#" },
  { name: "Contract", href: "#" },
  { name: "Training", href: "#" },
];
const Header = () => {
  return (
    <section className="container mx-auto flex justify-around absolute top-0 left-0 right-0 mt-10  z-20">
      {/* logo */}
      <div>
        <img src="logo.jpg" alt="" className="w-32 bg-transparent" />
      </div>
      {/* nav */}
      <nav className="hidden md:block">
        <ul className="flex flex-wrap gap-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-white">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* mobile nav */}
      <div className="md:hidden">
        <Menu className="h-6 w-6" />
      </div>
    </section>
  );
};

export default Header;

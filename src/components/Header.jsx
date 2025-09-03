import { useState } from "react";
import { IoClose, IoMenuSharp } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 64; // 4rem = 64px
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-white z-50 shadow-md px-8 ">
      <nav className="flex h-16 items-center justify-between max-w-7xl mx-auto">

        <div className="text-2xl lg: text-3xl font-bold text-gray-600">Portfolio</div>

        <span
          className={`block md:hidden transition-transform duration-300  text-2xl cursor-pointer }`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoClose className="text-xl text-gray-400" /> :
            <IoMenuSharp className="text-3xl " />}
        </span>

        <div className="hidden md:flex items-center md:text-md lg:text-lg gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
            >
              {item.name}
            </button>
          ))}
        </div>

      </nav>

      <div
        className={`fixed rounded-lg top-18 right-2 w-48 bg-white text-md shadow-lg md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen
          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
          : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col px-4">
          {navItems.map(({ name, href }) => (
            <button
              key={name}
              onClick={() => scrollToSection(href)}
              className={`border-b border-gray-100 py-2.5 hover:text-gray-400 transition-colors duration-200 "
                }`}
            >
              {name}

            </button>
          ))}
        </nav>
      </div>

     
    </header>
  );
};

export default Header;
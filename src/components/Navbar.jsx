import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "../styles/navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo">
          MENNA<span>.</span>
        </a>

        <nav className="desktop-nav">
          {links.map((link) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}

          <a href="/CV.pdf" className="nav-cv">
            CV
            <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={23} />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-label">MENU</span>

          <button
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={23} />
          </button>
        </div>

        <nav className="mobile-nav">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
            >
              <span>0{index + 1}</span>
              {link.name}
            </a>
          ))}

          <a href="/CV.pdf" onClick={closeMenu}>
            <span>06</span>
            CV
            <ArrowUpRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  );
}
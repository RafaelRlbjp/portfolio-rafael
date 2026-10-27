
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Início", "#inicio"],
    ["Sobre", "#sobre"],
    ["Serviços", "#servicos"],
    ["Projetos", "#projetos"],
    ["Contato", "#contato"]
  ];

  return (
    <header className="header">
      <div className="container nav">
        <a className="logo" href="#inicio">
          Rafael<span> Lima.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir ou fechar menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

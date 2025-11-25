import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "About",    id: "about"    },
    { name: "Projects", id: "projects" },
    { name: "Team Members", id: "team" },
    { name: "Services", id: "services" },
    { name: "Contact",  id: "contact"  },
  ];

  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex justify-center pt-6 fixed z-50">
      {/* обертка-«шея» – при 550px растягивается по высоте */}
      <div
        className={`
          flex flex-col items-center justify-center gap-8 px-8 py-3
          rounded-2xl
          backdrop-blur-xl bg-white/80 dark:bg-neutral-900/40
          shadow-lg ring-1 ring-black/10
          transition-[height] duration-300 ease-out
          ${open ? "h-auto pb-4" : "h-[60px]"}
        `}
      >
        {/* верхняя строка (всегда visible) */}
        <div className="w-full flex items-center gap-12 justify-center">
          {/* лого */}
          <Link to="/" onClick={scrollToTop}>
            <img src="/logo.svg" alt="Logo" className="w-12" />
          </Link>

          {/* бургер (виден только ≤550px) */}
          <button
            className="md:hidden p-2 rounded-full
                       hover:bg-white/60 dark:hover:bg-neutral-800/50"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-gray-200"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* обычные кнопки (видны всегда, кроме ≤550px) */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="px-4 py-1 rounded-full text-sm transition
                           text-gray-700 dark:text-gray-300
                           hover:bg-white/60 dark:hover:bg-neutral-800/50"
              >
                {l.name}
              </button>
            ))}
          </div>
        </div>

        {/* мобильные ссылки (раскрываются внутри той же плашки) */}
        {open && (
          <div className="md:hidden flex flex-col items-stretch gap-3 w-full">
            {links.map(l => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="px-4 py-2 rounded-full text-sm transition
                           text-gray-700 dark:text-gray-300
                           hover:bg-white/60 dark:hover:bg-neutral-800/50"
              >
                {l.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
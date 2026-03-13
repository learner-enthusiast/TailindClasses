import { useState } from "react";
import { Button } from "./Button";

export const StickyHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // sticky top-0 z-50 — key sticky positioning
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo: font-bold text-xl tracking-tight */}
        <span className="font-bold text-xl tracking-tight text-gray-900">
          TailwindClass
        </span>

        {/* Desktop nav: hidden md:flex — hidden on mobile, flex on md+ */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {["Home", "Components", "Docs", "Blog"].map((item) => (
            // hover:text-blue-600 transition-colors — color transition on hover
            <a
              key={item}
              href="#"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA: hidden md:block */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Hamburger: md:hidden — only visible on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
        >
          {/* space-y-1 — vertical spacing between bars */}
          <div className="space-y-1">
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu: max-h-0 overflow-hidden → max-h-96 on open (height transition) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {["Home", "Components", "Docs", "Blog"].map((item) => (
            <a
              key={item}
              href="#"
              className="px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
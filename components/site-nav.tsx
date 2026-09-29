"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Rex Makusia, home">
          <span className="wordmark-mark">RM</span>
          <span>
            rex makusia
            <br />
            developer
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="nav-links"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div className={`nav-links${isOpen ? " is-open" : ""}`} id="nav-links">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav-github"
            href="https://github.com/rex-makusia"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

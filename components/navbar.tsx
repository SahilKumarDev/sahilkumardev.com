"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const navItems = [
    {
      name: "about",
      href: "/",
    },
    {
      name: "resume",
      href: "/resume",
    },
    {
      name: "portfolio",
      href: "/portfolio",
    },
    {
      name: "youtube",
      href: "/youtube",
    },
    {
      name: "contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.href} className="navbar-item">
            <Link
              href={item.href}
              className={`navbar-link ${
                pathName === item.href ? "active" : ""
              }`}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

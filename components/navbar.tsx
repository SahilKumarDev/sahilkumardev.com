"use client";

import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";
import { TbHomeInfinity } from "react-icons/tb";
import { FaUserAstronaut } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { TiContacts } from "react-icons/ti";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "home",
      href: "/",
      icon: <TbHomeInfinity size={22} />,
    },
    {
      name: "about",
      href: "/about",
      icon: <FaUserAstronaut size={18} />,
    },
    {
      name: "project",
      href: "/project",
      icon: <HiCode size={22} />,
    },
    {
      name: "contact",
      href: "/contact",
      icon: <TiContacts size={22} />,
    },
  ];

  return (
    <div className="fixed top-10 left-0 right-0 z-50 flex">
      <Card className="flex flex-row w-full max-w-2xl mx-auto items-center justify-between px-5 py-3">
        <div>
          <Image
            src={"/logo-light.svg"}
            alt="logo"
            width={100}
            height={100}
            className="h-12 w-auto dark:hidden"
          />
          <Image
            src={"/logo-dark.svg"}
            alt="logo"
            width={100}
            height={100}
            className="h-12 w-auto hidden dark:block"
          />
        </div>

        <TooltipProvider>
          <div className="flex gap-x-1">
            {navItems.map((item, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={`hover:bg-muted flex items-center justify-center h-8 w-8 rounded-full transition-colors ${
                      item.href === pathname ? "bg-orange-500/70 hover:bg-orange-500/70" : ""
                    }`}
                  >
                    {item.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{item.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <ThemeToggle />
      </Card>
    </div>
  );
};

export default Navbar;

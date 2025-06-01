import { Code, Home, Proportions, User } from "lucide-react";
import { Card } from "./ui/card";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      icon: <Home />,
    },
    {
      name: "about",
      icon: <User />,
    },
    {
      name: "project",
      icon: <Code />,
    },
    {
      name: "contact",
      icon: <Proportions />,
    },
  ];
  return (
    <div className="fixed top-10 left-0 right-0 z-50 flex">
      <Card className="flex-row w-full max-w-2xl mx-auto items-center justify-between px-5">
        <div className="uppercase">Dev</div>

        <div className="flex">
          {navItems.map((item, idx) => (
            <div key={idx}>
              <div className="hover:bg-muted p-2.5 rounded-full">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
        <ThemeToggle />
      </Card>
    </div>
  );
};

export default Navbar;

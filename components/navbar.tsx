import { Code, Home, Proportions, User } from "lucide-react"
import { Card } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import ThemeToggle from "./theme-toggle"
import Link from "next/link"
// import { TooltipProvider } from "./ui/tooltip"

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      href: "",
      icon: <Home />,
    },
    {
      name: "about",
      href: "about",
      icon: <User />,
    },
    {
      name: "project",
      href: "project",
      icon: <Code />,
    },
    {
      name: "contact",
      href: "contact",
      icon: <Proportions />,
    },
  ]

  return (
    <div className="fixed top-10 left-0 right-0 z-50 flex">
      <Card className="flex flex-row w-full max-w-2xl mx-auto items-center justify-between px-5 py-3">
        <div className="uppercase font-semibold">Dev</div>

        <TooltipProvider>
          <div className="flex">
            {navItems.map((item, idx) => (
              <Tooltip key={idx}>
                <TooltipTrigger asChild>
                  <Link href={`/${item.href}`} className="hover:bg-muted p-2.5 rounded-full transition-colors">
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
  )
}

export default Navbar

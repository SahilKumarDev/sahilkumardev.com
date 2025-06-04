import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Copy, Instagram, Linkedin, Plus, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center py-6">
        <h1 className="text-3xl font-bold">Let’s work together.</h1>

        <p className="text-muted-foreground text-lg pt-0.5 pb-2.5">
          Creating user experience and visual appealing design
        </p>
        <div className="flex gap-4 mt-2">
          <Button variant={"secondary"}>
            <Plus />
            Hire Me
          </Button>
          <Button>
            <Copy />
            Copy Email
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="mt-3">
          <div className="flex items-center justify-between">
            <h1 className="flex items-center gap-1.5 font-medium text-muted-foreground text-lg">
              <div className="bg-muted-foreground h-2 w-2 rounded-full" />
              Social Media
            </h1>

            <div className="flex items-center gap-2">
              <button className="border border-muted-foreground/30 p-2 flex items-center justify-center bg-muted rounded-full h-10 w-10">
                <Instagram />
              </button>
              <button className="border border-muted-foreground/30 p-2 flex items-center justify-center bg-muted rounded-full h-10 w-10">
                <Youtube />
              </button>
              <button className="border border-muted-foreground/30 p-2 flex items-center justify-center bg-muted rounded-full h-10 w-10">
                <Linkedin />
              </button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex flex-col md:flex-row items-center justify-center gap-2 dark:text-white/60 tracking-wider text-nowrap mt-3">
        Made with ❤️ by Developer
        <span className="flex gap-x-2">
          <Link
            href={"https://sahilkumardev.netlify.app"}
            target="_blank"
            className="hover:no-underline dark:hover:text-white underline underline-offset-4"
          >
            Sahil Kumar Dev
          </Link>
          or
          <Link
            href={"https://buymeacoffee.com/sahilkumar.dev"}
            target="_blank"
            className="hover:no-underline dark:hover:text-white underline underline-offset-4"
          >
            buy me a coffee
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import { Copy, Plus } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-32 px-6">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-1.5 font-inter font-bold text-xl">
          <div className="bg-muted-foreground h-2.5 w-2.5 rounded-full animate-pulse" />
          Web Developer
        </h1>

        <div className="flex items-center gap-1.5 bg-green-500/30 px-3.5 py-1 rounded-full border border-green-500 text-xs font-medium text-green-300 uppercase">
          <div className="bg-green-400 h-2 w-2 rounded-full animate-pulse" />
          Available for work
        </div>
      </div>

      <div className="flex py-8 gap-6">
        <div className="">
          <h1 className="text-4xl font-semibold">I&apos;m Sahil Kumar</h1>
          <p className="text-muted-foreground py-2">
            Web developer with a passion for creating dynamic and responsive web
            applications. I specialize in building user-friendly interfaces and
            ensuring seamless user experiences across various devices.
          </p>

          <div className="flex gap-4 mt-2">
            <Button>
              <Plus />
              Hire Me
            </Button>

            <Button variant={"outline"}>
              <Plus />
              Hire Me
            </Button>

            <Button>
              <Plus />
              Hire Me
            </Button>

            <button className="inline-flex border border-orange-500 justify-center items-center px-3 py-2 rounded-sm bg-primary/50 gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none hover:outline-6 outline-orange-500/10 disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
              <Copy />
              Copy Email
            </button>

            <button className="inline-flex text-orange-400 underline-offset-6 hover:underline justify-center items-center px-3 py-2 gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none outline-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive">
              link
            </button>
          </div>
        </div>

        <Image
          src="/user.png"
          alt="Profile Picture"
          width={200}
          height={200}
          className="rounded-full border-2 border-orange-400/40 p-3 bg-orange-500/20"
        />
      </div>
    </div>
  );
};

export default Home;

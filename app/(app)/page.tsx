import ProjectCard from "@/components/_components/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ArrowRight, Copy, Plus } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <div className="mt-32 px-6">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center gap-1.5 font-medium text-xl">
          <div className="bg-muted-foreground h-2 w-2 rounded-full" />
          Developer Portfolio
        </h1>

        <div className="flex items-center gap-1.5 bg-green-500/30 px-3.5 py-1 rounded-full border border-green-500 text-xs font-medium text-green-300 uppercase">
          <div className="bg-green-400 h-2 w-2 rounded-full animate-pulse" />
          Available for work
        </div>
      </div>

      <div className="flex pt-10 pb-5 gap-6">
        <div>
          <h1 className="text-3xl font-bold">I&apos;m Sahil Kumar</h1>
          <p className="text-muted-foreground py-2">
            Web developer with a passion for creating dynamic and responsive web
            applications. I specialize in building user-friendly interfaces and
            ensuring seamless user experiences across various devices.
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

        <Image
          src="/user.png"
          alt="Profile Picture"
          width={100}
          height={100}
          className="h-44 w-44 rounded-full border-2 border-orange-400/40 p-3 bg-orange-500/20"
        />
      </div>

      <div className="grid gap-6 mt-4">
        <Card>
          <CardHeader className="mt-3">
            <div className="flex items-center justify-between">
              <h1 className="flex items-center gap-1.5 font-medium text-muted-foreground text-lg">
                <div className="bg-muted-foreground h-2 w-2 rounded-full" />
                Projects
              </h1>

              <Button variant={"outline"}>
                view all <ArrowRight className="size-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="gap-4 grid">
            {[1, 2, 3].map((item) => (
              <ProjectCard key={item} />
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="mt-3">
            <h1 className="flex items-center gap-1.5 font-medium text-muted-foreground text-lg">
              <div className="bg-muted-foreground h-2 w-2 rounded-full" />
              Recent Work
            </h1>
          </CardHeader>
          <CardContent className="gap-4 grid">
            {[1, 2].map((item) => (
              <ProjectCard key={item} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;

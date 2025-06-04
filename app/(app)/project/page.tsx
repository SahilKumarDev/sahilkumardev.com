import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/_components/project-card";

const Project = () => {
  return (
    <div className="mt-32 px-6">
      <h1>Explore My Products</h1>

      <p>
        Some of the digital products that I worked on as side projects, explore
        and try it now
      </p>

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
  );
};

export default Project;

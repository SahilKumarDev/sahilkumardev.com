import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const ProjectCard = () => {
  return (
    <Card className="flex-row items-center justify-between px-4">
      <div className="flex items-center gap-5">
        <Image
          src={"/user.png"}
          alt="image"
          width={60}
          height={60}
          className="rounded-full border border-orange-400/40 p-1.5 bg-orange-500/20"
        />
        <div className="grid">
          <h1 className="font-medium text-2xl capitalize">heading</h1>
          <p className="text-lg text-muted-foreground">Description</p>
        </div>
      </div>
      <ArrowRight className="text-muted-foreground" />
    </Card>
  );
};

export default ProjectCard;

import ProjectCard from "@/components/_components/project-card";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-32 px-6">
      <h1>it&apos;s Me Sahil kumar dev</h1>
      <p>
        I&apos;m Sahil kumar dev, a product designer with over 5 years of
        experience, currently residing in Jakarta, Indonesia. I have a deep
        passion for crafting purposeful interfaces and products. My main goal is
        to bridge the divide between people and technology, transforming
        intricate challenges into meaningful and seamless experiences.
      </p>
      <Image
        src="/about.jpg"
        alt="Profile Picture"
        width={100}
        height={100}
        className=""
      />
      <h1>More about me</h1>
      <p>
        Brian Do holds a bachelor&apos;s degree in Graphic Design from a
        prestigious university in the United States and has a relentless drive
        for staying up-to-date with the latest technologies and design trends.
        Actively involved in the design community, Brian regularly participates
        in diverse design conferences and meetups.
      </p>
      <p>
        When he&apos;s not immersed in design work, he finds solace in playing
        the guitar and exploring new coffee shops in his local area. Brian
        firmly believes in maintaining a healthy work-life balance, making sure
        to take breaks and reenergize his creativity. In his spare time, he also
        volunteers at a local animal shelter on weekends.
      </p>
      <h1>My Side Projects</h1>
      {[1, 2].map((item) => (
        <ProjectCard key={item} />
      ))}
    </div>
  );
};

export default About;

import Projects from "@/components/projects";
import React from "react";

const Portfolio = () => {
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title title-text">Portfolio</h2>
      </header>
      <Projects/>
    </article>
  );
};

export default Portfolio;

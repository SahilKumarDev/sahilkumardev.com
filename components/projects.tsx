"use client";

import { useState } from "react";
import { FiArrowUpRight as Preview } from "react-icons/fi";

const Projects = () => {
  const projectsData = [
    {
      src: "/project/case-cobra.png",
      alt: "Case Cobra",
      title: "case Cobra",
      category: "Web development",
      link: "https://casecobracase.vercel.app/",
    },
    {
      src: "/project/coffee-cafe.png",
      alt: "coffee cafe",
      title: "Coffee Cafe",
      category: "Web design",
      link: "https://premium-coffee-shop.netlify.app/",
    },
    {
      src: "/project/weather.png",
      alt: "Weather",
      title: "Weather",
      category: "Web development",
      link: "https://temperatureio.netlify.app/",
    },
    {
      src: "/project/brain-wave-ai.png",
      alt: "BrainWaveAi",
      title: "Brain Wave Ai",
      category: "Web design",
      link: "https://brainwaveai-zeta.vercel.app/",
    },
  ];

  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(
    (project) => filter === "all" || project.category.toLowerCase() === filter
  );

  const categories = ["all", "web design", "web development"];

  return (
    <section className="projects">
      <ul className="filter-list">
        {categories.map((category) => (
          <li key={category} className="filter-item">
            <button
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <ul className="project-list">
        {filteredProjects.map(({ src, alt, title, category, link }) => (
          <li
            className="project-item active"
            key={title}
            data-filter-item
            data-category={category.toLowerCase()}
          >
            <a href={link} target="_blank">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <Preview />
                </div>
                <img src={src} alt={alt} loading="lazy" />
              </figure>
              <h3 className="project-title">{title}</h3>
              <p className="project-category">{category}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

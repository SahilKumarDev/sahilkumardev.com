import { FaBook as BookIcon } from "react-icons/fa";

const Resume = () => {
  const TimelineItems = [
    {
      title: "Shri Vinayak International School",
      date: "2020 — 2021",
      description: "Complete my high school study.",
    },
    {
      title: "Shri Vinayak International School",
      date: "2022 — 2023",
      description: "Complete my inter school study.",
    },
    {
      title: "Axis Colleges Kanpur",
      date: "2023 — 2026",
      description: "Pursuing BCA from the axis colleges.",
    },
  ];

  const skillsItems = [
    {
      name: "Next.js",
      value: 70,
    },
    {
      name: "Web Development",
      value: 90,
    },
    {
      name: "Web Design",
      value: 80,
    },
    {
      name: "Figma",
      value: 60,
    },
  ];

  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title title-text">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookIcon />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          {TimelineItems.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          {skillsItems.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.value}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;

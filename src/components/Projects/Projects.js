import React, { useState } from "react";
import "./Projects.css";
import { Element } from "react-scroll";

import FilterProjects from "../FilterProjects/FilterProjects";
import Project from "../Project/Project";

import desktop from "../../Images/projects/desktop.png";
import rosabud from "../../Images/projects/rosabud.png";
import sharehub from "../../Images/projects/sharehub.png";
import yourgym from "../../Images/projects/yourgym.png";

export default function Projects(){
  const [projects, setProjects] = useState([
    {
      hasCode: true,
      hasLive: true,
      imageLink: yourgym,
      codeLink: "https://github.com/elmaccho/YourGym-vue",
      liveLink: "https://elmaccho.github.io/YourGym-vue/",
      title: "YourGym Fitness Club",
      techList: ["Vue", "Bootstrap"],
      projectType: "web",
    },
    {
      isImage: true,
      imageLink: desktop,
      title: "Projekt Strony desktop",
      techList: ["Figma"],
      projectType: "uiux",
    },
    {
      isImage: true,
      imageLink: rosabud,
      title: "Projekt Strony Rosabud",
      techList: ["Figma"],
      projectType: "uiux",
    },
    {
      hasCode: true,
      imageLink: sharehub,
      hasLive: true,
      codeLink: "https://github.com/elmaccho/ShareHub",
      title: "Forum Internetowe ShareHub",
      techList: ["Laravel", "LiveWire", "Bootstrap"],
      projectType: "web",
    },
  ]);

  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleFilter = (filter) => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.projectType === filter
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <Element name="projects">
      <div className="projects-wrapper">
        <FilterProjects handleFilter={handleFilter} />
        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </Element>
  );
};
import React, { useState } from "react";
import "./Projects.css";
import { Element } from "react-scroll";

import FilterProjects from "components/FilterProjects/FilterProjects";
import Project from "components/Project/Project";

import yourgymproject from "Images/projects/yourgymproject.jpg";
import sharehub from "Images/projects/sharehub.png";
import yourgym from "Images/projects/yourgym.png";
import edutechmain from "Images/projects/edutechmain.png";
import edutechsite from "Images/projects/edutechstrona.png";


export default function Projects() {
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);

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
      imageLink: yourgymproject,
      title: "Projekt Strony YourGym",
      techList: ["Figma", "PhotoShop"],
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
    {
      isImage: true,
      imageLink: edutechmain,
      title: "Projekt Strony EduTech",
      techList: ["Figma"],
      projectType: "uiux",
    },
    {
      hasCode: true,
      codeLink: "https://github.com/elmaccho/EduTechPl",
      imageLink: edutechsite,
      title: "EduTech",
      techList: ["Laravel", "React"],
      projectType: "web"
    }
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
}

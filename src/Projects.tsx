import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetailModal from "./ProjectDetailModal";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: string;
};

function Projects() {
const projects: Project[] = [
  {
    title: "MLG",
    description: "Following SDLC, created professional website for Major Label Group LLC",
    image: "/MLGHeroCollage1.png",
    tech: ["React", "TypeScript", "CSS"],
    links: "https://majorlabelgroup.com/",
  },
  {
    title: "Portfolio",
    description: "Portfolio - LABprajX site",
    image: "/linkedimpfp.png",
    tech: ["React", "TypeScript", "CSS"],
    links: "https://www.linkedin.com/in/prajwolshrestha1/",
  },
  {
    title: "GameSpace",
    description: "Senior Project - Social gaming platform with React & Supabase",
    image: "/GamespaceLandingPage.png",
    tech: ["React","JavaScript","Supabase"],
    links: "https://github.com/AaronScott2025/GameSpace",
  },
  {
    title: "More Coming Soon",
    description: "  ",
    image: "/underwatercliff.jpg",
    tech: [],
    links: "https://github.com/praj003",
  },
];
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} onClick={() => setSelectedProject(p)}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
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
    description: "Following SDLC, created professional portfolio website for Major Label Group LLC",
    image: "/MLGHeroCollage1.png",
    tech: ["React", "TypeScript", "CSS"],
    links: "https://majorlabelgroup.com/",
  },
  {
    title: "GameSpace",
    description: "Senior Project - Social gaming platform for gamers to connect, share, and make transactions",
    image: "/GamespaceLandingPage.png",
    tech: ["React","JavaScript","Supabase"],
    links: "https://github.com/AaronScott2025/GameSpace",
  },

 {
    title: "Calendar App",
    description: "  ",
    image: "/calendar-app.png",
    tech: ["TypeScript", "CSS", "Supabase" ],
    links: "https://calendar-app-rust-delta.vercel.app/",
  },

  {
    title: "GradeBook",
    description: "GradeBook - Application to manage, edit, and save grades",
    image: "/gradebook_.png",
    tech: ["Java", "JavaFX", "Scene Builder"],
    links: "https://github.com/Praj003/GradeBook",
  },
  {
    title: "Portfolio",
    description: "Portfolio - LabprajX website",
    image: "/linkedimpfp.png",
    tech: ["React", "TypeScript", "CSS"],
    links: "https://labprajx.vercel.app/",
  },

  {
    title: "Adding More Soon",
    description: "  ",
    image: "/jellyfish.jpg",
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
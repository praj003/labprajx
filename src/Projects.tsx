import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "MLG",
      description: "Following SDLC, created professional website for Major Label Group LLC",
      image: "/MLGHeroCollage1.png",
    },
    {
      title: "Portfolio",
      description: "Portfolio - LABprajX site",
      image: "/linkedimpfp.png",
    }, 
    {
      title: "GameSpace",
      description: "Senior Project - Social gaming platform with React & Supabase",
      image: "/GamespaceLandingPage.png",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">
        Projects
      </h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
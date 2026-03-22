
type ProjectProps = {
  title: string;
  description: string;
  image: string;
};

function ProjectCard({ title, description, image }: ProjectProps) {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      
      <div className="project-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
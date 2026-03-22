import React from "react";
import Modal from "react-modal";
import "./ProjectDetailModal.css";

type Props = {
  project: {
    title: string;
    description: string;
    image: string;
    tech: string[];
    links: string;
  };
  onClose: () => void;
};

export default function ProjectDetailModal({ project, onClose }: Props) {
  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Project Details"
      className="project-modal"
      overlayClassName="project-modal-overlay"
    >
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>

      {project.tech && (
        <div>
          <h4></h4>
          <ul>
            {project.tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {project.links && project.links !== "under construction" ? (
        <p>
          <a href={project.links} target="_blank" rel="noopener noreferrer">
            Link
          </a>
        </p>
      ) : (
        <p>{project.links}</p>
      )}
    </Modal>
  );
}
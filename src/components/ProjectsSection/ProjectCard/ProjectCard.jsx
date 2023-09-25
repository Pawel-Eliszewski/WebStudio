import PropTypes from "prop-types";
import "./ProjectCard.css";
/**
 * @param {{ project:
 * { id: string, title: string, type: string, button: string, info: string, img: string,
 *  img_2x: string, alt: string } }} props
 */
export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card__figure">
        <img
          className="project-card__img"
          src={`/assets/${project.img}`}
          srcSet={`/assets/${project.img_2x} 2x`}
          alt={project.alt}
        />
        <div className="project-card__overlay">
          <p className="project-card__overlay-text">{project.info}</p>
        </div>
      </div>
      <div className="project-card__info">
        <p className="project-card__title">
          <strong>{project.title}</strong>
        </p>
        <p className="project-card__subtitle">{project.type}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    img_2x: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

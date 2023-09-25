import PropTypes from "prop-types";
import { ProjectCard } from "../../ProjectsSection/ProjectCard/ProjectCard";
import "./ProjectsGrid.css";
/**
 * @param {{ projects:
 * { id: string, title: string, type: string, button: string, info: string, img: string,
 *  img_2x: string, alt: string }[] }} props
 */
export const ProjectsGrid = ({ projects }) => {
  return (
    <div className="container">
      <ul className="projects__grid">
        {projects.map((project) => {
          return (
            <li key={project.id} className="projects__item">
              <ProjectCard project={project} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      button: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      img_2x: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ),
};

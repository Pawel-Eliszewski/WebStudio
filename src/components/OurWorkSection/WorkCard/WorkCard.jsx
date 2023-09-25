import PropTypes from "prop-types";
import { TitleSmall } from "../../Titles/TitleSmall/TitleSmall";
import "./WorkCard.css";
/**
 * @param {{ work: { title: string, img: string, img_2x: string, alt: string } }} props
 */
export const WorkCard = ({ work }) => {
  return (
    <div className="work-card">
      <img
        className="work-card__img"
        src={`/assets/${work.img}`}
        srcSet={`/assets/${work.img_2x} 2x`}
        alt={work.alt}
      />
      <div className="work-card__overlay">
        <TitleSmall title={work.title} />
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  work: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    img_2x: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

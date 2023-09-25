import PropTypes from "prop-types";
import { TitleSmall } from "../../Titles/TitleSmall/TitleSmall";
import icons from "/assets/icons.svg";
import "./FeatureCard.css";
/**
 * @param {{ feature: {id: string, name: string, info: string, img: string} }} props
 */
export const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon-wrapper">
        <svg className="feature-card__icon">
          <use href={icons + `#icon-${feature.img}`} />
        </svg>
      </div>
      <TitleSmall title={feature.name} />
      <p className="feature-card__text">{feature.info}</p>
    </div>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

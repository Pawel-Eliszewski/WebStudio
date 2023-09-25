import PropTypes from "prop-types";
import icons from "/assets/icons.svg";
import "./ButtonBurger.css";
/**
 * @param {{ onClick?: (ev?: import('react').MouseEvent) => void }} props
 */
export const ButtonBurger = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mobile__burger-btn"
      aria-expanded="false"
      aria-controls="mobile-menu"
      type="button"
    >
      <svg className="mobile__burger-icon">
        <use href={icons + `#icon-burger`} />
      </svg>
    </button>
  );
};

ButtonBurger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

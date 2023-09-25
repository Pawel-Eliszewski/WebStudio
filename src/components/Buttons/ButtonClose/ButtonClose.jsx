import PropTypes from "prop-types";
import icons from "/assets/icons.svg";
import "./ButtonClose.css";
/**
 * @param {{ onClick?: (ev?: import('react').MouseEvent) => void }} props
 */
export const ButtonClose = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button-close">
      <svg className="button-close__icon">
        <use href={icons + `#icon-close`} />
      </svg>
    </button>
  );
};

ButtonClose.propTypes = {
  onClick: PropTypes.func.isRequired,
};

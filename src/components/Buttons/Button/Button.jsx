import PropTypes from "prop-types";
import "./Button.css";
/**
 * @param {{ title: string, icon?: {}, onClick?: (ev?: import('react').MouseEvent) => void,
 *  styles: '--form-newsletter' | '--hero', type: 'submit' | 'button' }} props
 */
export const Button = ({ title, icon, onClick, styles, type }) => {
  return (
    <button
      id={title}
      onClick={onClick}
      className={"btn btn" + styles}
      type={type}
    >
      {title}
      {icon}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  onClick: PropTypes.func,
  styles: PropTypes.string,
  type: PropTypes.string.isRequired,
};

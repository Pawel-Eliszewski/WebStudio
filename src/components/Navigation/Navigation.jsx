import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
/**
 * @param {{ styles: '--header' | '--mobile', onClick?: (ev?: import('react').MouseEvent) => void }} props
 */
export const Navigation = ({ onClick, styles }) => {
  return (
    <nav className={"nav nav" + styles}>
      <ul className={"nav__list nav__list" + styles}>
        <li className={"nav__item nav__item" + styles}>
          <NavLink
            onClick={onClick}
            className={"nav__link nav__link" + styles}
            to="/"
          >
            Agency
          </NavLink>
        </li>
        <li className={"nav__item nav__item" + styles}>
          <NavLink
            onClick={onClick}
            className={"nav__link nav__link" + styles}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li className={"nav__item nav__item" + styles}>
          <NavLink
            onClick={onClick}
            className={"nav__link nav__link" + styles}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import { Button } from "../Buttons/Button/Button";
import "./Filters.css";
/**
 * @param {{ items: string[], onClick?: (ev?: import('react').MouseEvent) => void}} props
 */
export const Filters = ({ items, onClick }) => {
  return (
    <div className="filters__wrapper">
      <ul className="filters__list">
        {items.map((item) => {
          return (
            <li key={item}>
              <Button
                onClick={onClick}
                title={item}
                styles="--filters"
                type="button"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Filters.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

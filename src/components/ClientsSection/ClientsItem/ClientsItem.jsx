import PropTypes from "prop-types";
import icons from "/assets/icons.svg";
import "./ClientsItem.css";
/**
 * @param {{ client: {id: string, name: string, img: string} }} props
 */
export const ClientsItem = ({ client }) => {
  return (
    <svg className="clients__svg">
      <use href={icons + `#icon-${client.img}`} />
    </svg>
  );
};

ClientsItem.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }),
};

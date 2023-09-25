import PropTypes from "prop-types";
import "./TitleSmall.css";

export const TitleSmall = ({ title }) => {
  return <h3 className="title-small">{title}</h3>;
};

TitleSmall.propTypes = {
  title: PropTypes.string.isRequired,
};

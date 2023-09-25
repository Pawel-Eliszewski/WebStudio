import PropTypes from "prop-types";
import "./TitleMedium.css";

export const TitleMedium = ({ title }) => {
  return <h2 className="title-medium">{title}</h2>;
};

TitleMedium.propTypes = {
  title: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import icons from "/assets/icons.svg";
import "./ContactLinks.css";
/**
 * @param {{ styles: '--header' | '--mobile'}} props
 */
export const ContactLinks = ({ styles }) => {
  return (
    <ul className={"contact__list" + styles}>
      <li className={"contact__item" + styles}>
        <a
          className={"contact__link-mail" + styles}
          href="mailto:info@devstudio.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <svg className={"contact__icon-mail" + styles}>
            <use href={icons + "#icon-mail"} />
          </svg>
          info@devstudio.com
        </a>
      </li>
      <li className={"contact__item" + styles}>
        <a className={"contact__link-phone" + styles} href="tel:+48111111111">
          <svg className={"contact__icon-phone" + styles}>
            <use href={icons + "#icon-phone"} />
          </svg>
          +48 111 111 111
        </a>
      </li>
    </ul>
  );
};

ContactLinks.propTypes = {
  styles: PropTypes.string.isRequired,
};

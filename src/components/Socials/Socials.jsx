import PropTypes from "prop-types";
import icons from "/assets/icons.svg";
import "./Socials.css";
/**
 * @param {{ ourSocials: { instagram: string, twitter: string, facebook: string, linkedin: string },
 * memberSocials: { instagram: string, twitter: string, facebook: string, linkedin: string },
 *  styles: '--team-card' | '--footer' }} props
 */
export const Socials = ({ ourSocials, memberSocials, styles }) => {
  const setLinks = (ourSocials, memberSocials) => {
    if (memberSocials === undefined) return ourSocials;
    else return memberSocials;
  };

  return (
    <div className={"socials socials" + styles}>
      <ul className={"socials__list socials__list" + styles}>
        <a
          className={"socials__link socials__link" + styles}
          href={setLinks(ourSocials, memberSocials).instagram}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title="Instagram"
        >
          <li className={"socials__item socials__item" + styles}>
            <svg className={"socials__icon socials__icon" + styles}>
              <use href={icons + "#icon-instagram"} />
            </svg>
          </li>
        </a>
        <a
          className={"socials__link socials__link" + styles}
          href={setLinks(ourSocials, memberSocials).twitter}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title="Twitter"
        >
          <li className={"socials__item socials__item" + styles}>
            <svg className={"socials__icon socials__icon" + styles}>
              <use href={icons + "#icon-twitter"} />
            </svg>
          </li>
        </a>
        <a
          className={"socials__link socials__link" + styles}
          href={setLinks(ourSocials, memberSocials).facebook}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title="Facebook"
        >
          <li className={"socials__item socials__item" + styles}>
            <svg className={"socials__icon socials__icon" + styles}>
              <use href={icons + "#icon-facebook"} />
            </svg>
          </li>
        </a>
        <a
          className={"socials__link socials__link" + styles}
          href={setLinks(ourSocials, memberSocials).linkedin}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title="Linkedin"
        >
          <li className={"socials__item socials__item" + styles}>
            <svg className={"socials__icon socials__icon" + styles}>
              <use href={icons + "#icon-linkedin"} />
            </svg>
          </li>
        </a>
      </ul>
    </div>
  );
};

Socials.propTypes = {
  ourSocials: PropTypes.shape({
    instagram: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }),
  memberSocials: PropTypes.shape({
    instagram: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
  }),
  styles: PropTypes.string,
};

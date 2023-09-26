import PropTypes from "prop-types";
import { ButtonClose } from "../Buttons/ButtonClose/ButtonClose";
import { Navigation } from "../Navigation/Navigation";
import { ContactLinks } from "../ContactLinks/ContactLinks";
import { SocialsMobileMenu } from "../Socials/SocialsMobileMenu/SocialsMobileMenu";
import "./MobileMenu.css";
/**
 * @param {{ onClick?: (ev?: import('react').MouseEvent) => void, styles: '' | 'isOpen' }} props
 */
export const MobileMenu = ({ onClick, styles }) => {
  return (
    <div className={"mobile__container " + styles}>
      <ButtonClose onClick={onClick} />
      <Navigation onClick={onClick} styles="--mobile" />
      <div className="mobile__contact-wrapper">
        <ContactLinks styles="--mobile" />
        <SocialsMobileMenu />
      </div>
    </div>
  );
};

MobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  styles: PropTypes.string.isRequired,
};
